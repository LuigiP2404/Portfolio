import React from 'react'
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from 'react'
import ProjectBox from '../../components/ProjectCard/ProjectCard.tsx';
import { IconType } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaPhp, FaWordpress, FaGitAlt, FaReact, FaFilter, FaSortAlphaDown, FaSortAlphaUp, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { FaSass } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoVue, IoSearchOutline } from "react-icons/io5";
import { SiMysql, SiTypescript } from "react-icons/si";
import { RxCross2 } from "react-icons/rx";
import { DiJqueryLogo } from "react-icons/di";

import './Projects.css'

interface ProjectInterface {
    name: string,
    description: string,
    creationDateYear: string,
    creationDateMonth: string,
    creationDate: string,
    imgSrc: string,
    languages: LanguagesType[]
}

interface LanguagesType {
    icon: IconType,
    iconDesc: String
}

function Projects() {
    const [showDropdown, setShowDropdown] = useState<Boolean>(false);
    const [searchValue, setSearchValue] = useState<String>('');
    const [activeSorting, setActiveSorting] = useState<String>('');
    const [filteredProjects, setFilteredProjects] = useState<ProjectInterface[]>([])
    const [debounceTimer, setDebounceTimer] = useState<number | null>(null);
    const [transitioning, setTransitioning] = useState(false);
    const { t, i18n: {changeLanguage, language} } = useTranslation();

    const dropdownRef = useRef<HTMLDivElement>(null);

    const allProjects: ProjectInterface[] = [
        {
            name: 'Portfolio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at erat quam. Curabitur faucibus sit amet massa id fringilla. Curabitur diam leo, venenatis vitae sollicitudin.',
            creationDateMonth: 'Dec',
            creationDateYear: '2024',
            creationDate: '01/12/2024',
            imgSrc: '',
            languages: [
                {
                    icon: FaHtml5,
                    iconDesc: 'HTML'
                },
                {
                    icon: FaSass,
                    iconDesc: 'SASS'
                },
                {
                    icon: SiTypescript,
                    iconDesc: 'TypeScript'
                },
                {
                    icon: FaReact,
                    iconDesc: 'React'
                }
            ]
        },
        {
            name: 'Monster vs Player',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at erat quam. Curabitur faucibus sit amet massa id fringilla. Curabitur diam leo, venenatis vitae sollicitudin.',
            creationDateMonth: 'Feb',
            creationDateYear: '2022',
            creationDate: '01/02/2022',
            imgSrc: '',
            languages: [
                {
                    icon: FaHtml5,
                    iconDesc: 'HTML'
                },
                {
                    icon: FaSass,
                    iconDesc: 'SASS'
                },
                {
                    icon: SiTypescript,
                    iconDesc: 'TypeScript'
                },
                {
                    icon: FaReact,
                    iconDesc: 'React'
                }
            ]
        },
        {
            name: 'To-Do List',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at erat quam. Curabitur faucibus sit amet massa id fringilla. Curabitur diam leo, venenatis vitae sollicitudin.',
            creationDateMonth: 'Mar',
            creationDateYear: '2023',
            creationDate: '01/03/2024',
            imgSrc: '',
            languages: [
                {
                    icon: FaHtml5,
                    iconDesc: 'HTML'
                },
                {
                    icon: FaSass,
                    iconDesc: 'SASS'
                },
                {
                    icon: SiTypescript,
                    iconDesc: 'TypeScript'
                },
                {
                    icon: FaReact,
                    iconDesc: 'React'
                }
            ]
        },
    ]

    const applyTransition = (callback: () => void) => {
        setTransitioning(true);
        setTimeout(() => {
            callback();
            setTimeout(() => setTransitioning(false), 300); // Match CSS animation duration
        }, 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setShowDropdown(false);
        }
    };

    const toggleDropdown = (e: React.MouseEvent) => {
        e.stopPropagation();
        setShowDropdown((prev: boolean) => !prev);
    }

    const sortProjects = (value: string) => {
        applyTransition(() => {
            setActiveSorting(value);
            const sortedArray = [...filteredProjects];
            if (value.includes('AZ')) {
                const direction = value.replace('AZ', '');
                sortedArray.sort((a, b) =>
                    direction === 'Desc'
                        ? a.name.localeCompare(b.name)
                        : b.name.localeCompare(a.name)
                );
            } else {
                const direction = value.replace('Date', '');
                sortedArray.sort((a, b) => {
                    const dateA = new Date(a.creationDate).getTime();
                    const dateB = new Date(b.creationDate).getTime();
                    return direction === 'Desc' ? dateB - dateA : dateA - dateB;
                });
            }
            setFilteredProjects(sortedArray);
        });
    };
    
    const search = (value: string) => {
        setSearchValue(value);
        if (debounceTimer) clearTimeout(debounceTimer);
        const timer = setTimeout(() => {
            applyTransition(() => {
                if (value) {
                    const filteredArray = allProjects.filter((x) =>
                        x.name.toLowerCase().includes(value.toLowerCase())
                    );
                    setFilteredProjects(filteredArray);
                } else {
                    setFilteredProjects(allProjects);
                }
            });
        }, 1200);
        setDebounceTimer(timer);
    };

    const resetSearch = () => {
        applyTransition(() => {
            setSearchValue('');
            if (debounceTimer) {
                setDebounceTimer(null);
            }
            if (activeSorting) {
                sortProjects(activeSorting)
            } else {
                setFilteredProjects(allProjects);
            }
        });
    }

    const resetFilters = () => {
        applyTransition(() => {
            setSearchValue('');
            setActiveSorting('');
            setFilteredProjects(allProjects);
            setShowDropdown(false);
        })
    }

    useEffect(() => {
        setFilteredProjects(allProjects);
    }, [])

    useEffect(() => {
        if (showDropdown) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showDropdown]);

    return (
        <div className="projects" id="projects">
            <p className="section-intro-text">{t('Browse My Recent')}</p>
            <h2 className="section-title">{t('Projects')}</h2>
            <div className="projects-filters">
                <a onClick={toggleDropdown}><FaFilter /></a>
                {showDropdown &&
                    <div ref={dropdownRef} className="projects-filters-box">
                        <div className="projects-filters-box-input">
                            {searchValue.length === 0 && <span>
                                <IoSearchOutline />
                            </span>}
                            <input type="text" placeholder="Search..." value={searchValue} onChange={((e) => search(e.target.value))}></input>
                            {searchValue.length > 0 && <a onClick={() => resetSearch()}><RxCross2 /></a>}
                        </div>
                        <p className="projects-filters-box-sortText">
                            {t('Sort')}
                        </p>
                        <a class={activeSorting === 'AZDesc' ? 'active' : ''} onClick={() => sortProjects('AZDesc')}><FaSortAlphaDown /> A-Z</a>
                        <a class={activeSorting === 'AZAsc' ? 'active' : ''} onClick={() => sortProjects('AZAsc')}><FaSortAlphaUp /> Z-A</a>
                        <a class={activeSorting === 'DateDesc' ? 'active' : ''} onClick={() => sortProjects('DateDesc')}><FaSortAmountDown /> {t('Most Recent')}</a>
                        <a class={activeSorting === 'DateAsc' ? 'active' : ''} onClick={() => sortProjects('DateAsc')}><FaSortAmountUp /> {t('Least Recent')}</a>
                        <button onClick={() => resetFilters()} disabled={activeSorting === '' && searchValue === ''} class="projects-filters-box-resetFilters">{t('Reset Filters')}</button>
                    </div>}
            </div>
            <div className={`projects-content ${showDropdown ? "opacity" : ""}`}>
                <div className="projects-boxes">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((x, idx) => (
                            <div
                                key={x.name} // Ensure unique keys
                                className={`${transitioning ? (idx % 2 === 0 ? "entering" : "exiting") : "reorder"
                                    }`}
                            >
                                <ProjectBox
                                    name={x.name}
                                    description={t(x.description)}
                                    imgSrc={x.imgSrc}
                                    creationDateMonth={x.creationDateMonth}
                                    creationDateYear={x.creationDateYear}
                                    languages={x.languages}
                                />
                            </div>
                        ))
                    ) : (
                        <h2 className="projects-boxes-notFound">
                            {t('No results found.')}
                            <a onClick={() => resetFilters()}>{t('Try clearing your filters')}</a>
                        </h2>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects;