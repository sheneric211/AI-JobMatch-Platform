import React from 'react';

export const DetailsJob = ({ selectedItem }) => {
    if (!selectedItem) {
        return null;
    }

    const { company, name, location, skills, jobDescription } = selectedItem;

    return (
        <div className='w-3/4 bg-white p-6 rounded-[10px]'>
            <div className='flex flex-col gap-12'>
                <div className='flex gap-4'>
                    <div className='w-[120px] mt-[3px]'>
                        <img src={selectedItem.logoJob} alt={company} />
                    </div>
                    <div className='text-sm text-[#6C6C6C] flex flex-col gap-[1px]'>
                        <p>{company}</p>
                        <h3 className='font-semibold text-xl text-black'>{name}</h3>
                        <span>{location.join(' | ')}</span>
                        <div className='flex gap-[7px] text-xs mt-2'>
                            {skills.map((skill, index) => (
                                <span key={index} className='rounded px-3 py-2 bg-slate-200'>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3 content'>
                    <div dangerouslySetInnerHTML={{ __html: jobDescription.content }} />
                </div>
            </div>
        </div>
    );
};
