import PropTypes from "prop-types";

import {useState, useRef} from 'react';
import {motion, AnimatePresence, LayoutGroup} from "framer-motion";
import {wrap} from "@popmotion/popcorn";


const pages = [0, 1, 2]
const Carousel = ({testimonials}) => {
    const xOffset = 100;

    const [[currentPage, direction], setCurrentPage] = useState([0, 0]);

    const setPage = (newPage, newDirection) => {
        if(!newDirection) newDirection = newPage - currentPage;
        setCurrentPage([newPage, newDirection])
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <Slides currentPage={currentPage} direction={direction} setPage={setPage} xOffset={xOffset} testimonials={testimonials}/>
            <Pagination currentPage={currentPage} setPage={setPage} testimonials={testimonials}/>
        </div>
    );
};

const Slides = ({currentPage, direction, setPage, xOffset, testimonials}) => {
    const sliderVariant = {
        enter: direction => ({
            x: direction > 0 ? xOffset : -xOffset,
            opacity: 0
        }),
        active: {
            x: 0,
            opacity: 1,
            transition: { delay: 0.2 }
        },
        exit: direction => ({
            x: direction > 0 ? -xOffset : xOffset,
            opacity: 0
        })
    }
    const hasPaginated = useRef(false);

    const detectPaginationGesture = (e, {offset}) => {
        if(hasPaginated.current) return;
        let newPage = currentPage;
        const threshold = xOffset / 2;

        if(offset.x < -threshold) {
            newPage = currentPage + 1;
        } else if (offset.x > threshold) {
            newPage = currentPage - 1;
        }

        if (newPage !== currentPage) {
            hasPaginated.current = true;
            newPage = wrap(0, pages.length, newPage);
            setPage(newPage, offset.x < 0 ? 1 : -1)
        }
    }
    return (
        <div className="relative w-[350px] h-[430px]">
            <AnimatePresence
                initial={false}
                custom={direction}
            >
                <motion.div
                    key={currentPage}
                    className="border-2 border-[#FFB430] w-full rounded-xl px-[16px] flex flex-col items-center h-auto py-12 justify-center text-center bg-white gap-[20px] shadow-xl bg-testimonial bg-no-repeat bg-bottom bg-contain absolute top-0 bottom-0 left-0 right-0"
                    variants={sliderVariant}
                    initial="enter"
                    animate="active"
                    exit="exit"
                    drag="x"
                    onDrag={detectPaginationGesture}
                    onDragStart={() => (hasPaginated.current = false)}
                    onDragEnd={() => (hasPaginated.current = true)}
                    /* Constraints snap component back to center */
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0}}
                    custom={direction}
                >
                    <p>&quot;{testimonials[currentPage].testimonial}&quot;</p>
                    <div>
                        <h3 className="text-[20px] font-bold">{testimonials[currentPage].name}</h3>
                        <p>{testimonials[currentPage].title}</p>
                    </div>
                    <img
                        className="w-[120px] h-[120px] object-cover rounded-full"
                         src={testimonials[currentPage].photo}
                         alt={`Image of ${testimonials[currentPage].name} who gave the testimonial`}/>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

const Pagination = ({currentPage, setPage, testimonials}) => {
    return (
        <LayoutGroup>
            <div className="flex justify-center mt-[30px]">
                {testimonials.map((testimonial, index) => (
                    <Dot
                        key={index}
                        onClick={() => setPage(index)}
                        isSelected={index=== currentPage}
                    />
                ))}
            </div>
        </LayoutGroup>
    )
}

const Dot = ({isSelected, onClick}) => {
    return (
        <div className="p-[20px] cursor-pointer" onClick={onClick}>
            <div className="w-[10px] h-[10px] bg-gray-300 rounded-full relative">
                {isSelected && (
                    <motion.div className="w-[16px] h-[16px] rounded-full absolute top-[-2px] left-[-2px] bg-gray-600" layoutId="highlight"/>
                )}
            </div>
        </div>
    )
}

export default Carousel;

Carousel.propTypes = {
    testimonials: PropTypes.array.isRequired,
}

// currentPage, direction, setPage, xOffset, testimonials

Slides.propTypes = {
    currentPage: PropTypes.number.isRequired,
    direction: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    xOffset: PropTypes.number.isRequired,
    testimonials: PropTypes.array.isRequired
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    testimonials: PropTypes.array.isRequired
}

Dot.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}
