import './Single.css'
import React from 'react';

interface SkeletonProps {
    count: number;
}

const Loading: React.FC<SkeletonProps> = ({ count }) => {
    return (
        <div className='skeleton__wrapperr container'>
            {
                Array(count).fill("").map((_, inx) => (
                    <div key={inx} className="skeleton__card">
                        <div className="skeleton__images skeleton__anime"></div>
                        <div className="skeleton__title skeleton__anime"></div>
                        <div className="skeleton__price skeleton__anime"></div>
                        <div className="skeleton__price skeleton__anime"></div>
                    </div>
                ))
            }
        </div>
    );
}

export default Loading;
