import React, { useEffect, useState } from 'react';

export const ListJob = ({ setSelectedItem }) => {
    const [selectedItemId, setSelectedItemId] = useState(1);

    useEffect(() => {
        setSelectedItem(dataJob.find(job => job.id === selectedItemId));
    }, [selectedItemId, setSelectedItem]);

    const handleItemClick = (id) => {
        setSelectedItemId(id);
    };

    const dataJob = [
        {
            "id": 1,
            "company": "Company name",
            "name": "Senior UX/UI Designer",
            "location": ["Location", "Remote", "Full-time"],
            "skills": ["UI Design", "Figma", "Landing Page"],
            "logoJob": "https://s3-alpha-sig.figma.com/img/fd47/49c6/889dbd1d771853657c39e1546f5dbf9c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wh6s4Fto36sdbU-nRq26FfHO7oy6TL-qn6UbFUoPGUCFTig2BgLdiCDGq2ucxDFvgXkT-NNlSIyhKpXIsrqn~qiQhQ3JwCN1CfKEUa-MK4a3gnqlhEUbeiDoSITmjnkJ4xnj8UJR6101PtmR~C-3IFGP804gD3T8vre9yBSnC6bI0qVEg9ngGhFDwolh-TjETIb44~r~~FMQRQmA3XPhd3bCwGXzbRfdDsCj3rr7A2bGlWYQTs3UTY2tITKhoYjG0H~f~IbbL9ebl5baNfUi8BBXwhCyEGS4OKy3ohlQd3QAn54p0q-LPD7VdiAHov6qAZ5Re6VsrUNvllfJKn9MEg__",
            "jobDescription": {
                "content": "<h3 className='text-xl font-semibold'>About the job</h3>\n<p>NE Championship is Asia’s largest global sports media property, and the world’s largest martial arts organization, hosting bouts across all styles of martial arts such as Muay Thai, Kickboxing, MMA, Grappling, etc. In addition to its digital platforms, ONE Championship broadcasts to over 2.6 billion potential viewers across 190 countries around the world with some of the largest global broadcasters, including Amazon Prime Video Sports, Globo’s Combate, Channel 7 HD, beIN Sports, Abema, Disney+ Hotstar, and more.</p>\n<p>Overview Apart from traditional broadcast platforms, ONE Championship is focused on building fan engagement through dedicated digital products. In addition to showing LIVE events, we are working towards giving our fans an immersive engagement experience powered by athlete statistics, seamless video consumption, interactive experiences, hyper-casual games and more. We value the importance of design which has been a part of our development process since inception. As the products become increasingly feature-rich and continue to gain more traction, we are looking to bring onboard a Senior Product Designer to the team to continue delivering engaging experiences for our fans.</p>\n<p>Reporting to the Director of Product, a successful candidate will work closely with a global team and build cross functional partnerships with key stakeholders spanning Product, Engineering, Marketing & Creative. Interested candidates should apply and provide a link to their portfolio.</p>\n<h3 className='text-xl font-semibold'>Responsibilities</h3>\n<ul>\n<li> ● Own the full lifecycle of our product stack & of new features - from conception through development to delivery</li>\n<li> ● Conceptualise and iterate many creative solutions to bring innovative ideas.</li>\n<li> ● Own the full lifecycle of our product stack & of new features - from conception through development to delivery</li>\n<li> ● Own the full lifecycle of our product stack & of new features - from conception through development to delivery</li>\n<li> ● Own the full lifecycle of our product stack & of new features - from conception through development to delivery</li>\n</ul>"
            }
        },
        {
            "id": 2,
            "company": "Another Company",
            "name": "Junior Frontend Developer",
            "location": ["Location", "Remote", "Part-time"],
            "skills": ["JavaScript", "React", "HTML/CSS"],
            "logoJob": "https://s3-alpha-sig.figma.com/img/fd47/49c6/889dbd1d771853657c39e1546f5dbf9c?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wh6s4Fto36sdbU-nRq26FfHO7oy6TL-qn6UbFUoPGUCFTig2BgLdiCDGq2ucxDFvgXkT-NNlSIyhKpXIsrqn~qiQhQ3JwCN1CfKEUa-MK4a3gnqlhEUbeiDoSITmjnkJ4xnj8UJR6101PtmR~C-3IFGP804gD3T8vre9yBSnC6bI0qVEg9ngGhFDwolh-TjETIb44~r~~FMQRQmA3XPhd3bCwGXzbRfdDsCj3rr7A2bGlWYQTs3UTY2tITKhoYjG0H~f~IbbL9ebl5baNfUi8BBXwhCyEGS4OKy3ohlQd3QAn54p0q-LPD7VdiAHov6qAZ5Re6VsrUNvllfJKn9MEg__",
            "jobDescription": {
                "content": "<p>This is a job description for a junior frontend developer.</p>"
            }
        }
    ];

    return (
        <div className='flex flex-col gap-4 w-1/4'>
            {dataJob.map((job) => (
                <div
                    key={job.id}
                    className={`flex flex-col gap-4 border p-4 rounded-xl shadow-lg cursor-pointer ${selectedItemId === job.id ? 'bg-gray-200' : 'bg-white'}`}
                    onClick={() => handleItemClick(job.id)}
                >
                    <div className='flex gap-4'>
                        <div className='w-[50px] mt-[3px]'>
                            <img src={job.logoJob} alt={job.company} />
                        </div>
                        <div className='text-xs text-[#6C6C6C] flex flex-col gap-[1px]'>
                            <p>{job.company}</p>
                            <h3 className='font-semibold text-base text-black'>{job.name}</h3>
                            <span>{job.location.join(' | ')}</span>
                        </div>
                    </div>
                    <div className='flex gap-[7px]'>
                        {job.skills.map((skill, index) => (
                            <span
                                key={index}
                                className={`rounded px-2 py-1 text-[9px] ${selectedItemId === job.id ? 'bg-white' : 'bg-slate-200'}`}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-[#3AB742] text-xs font-semibold'>$100k - $120k</span>
                        <span className='text-[11px] text-[#838383]'>1d</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
