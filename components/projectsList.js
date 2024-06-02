const projects = [
    {
        name: 'geomoose',
        deploy: 'https://geo.dug.wtf',
        github: 'https://github.com/dugalcedo/geomoose',
        desc: 'A filterable, sortable web app displaying information about the world\'s nations where a  random 8-question geography quiz is generated every day.',
        techs: ['html', 'css', 'js', 'vue']
    },
    {
        name: 'pong',
        deploy: 'https://dugpong.vercel.app/',
        github: 'https://github.com/dugalcedo/pong',
        desc: 'Recreation of the classic video game "Pong" using object-oriented programming.',
        techs: ['html', 'css', 'js']
    },
    {
        name: 'useContext tutorial',
        github: 'https://github.com/dugalcedo/use-context-tutorial',
        desc: 'A github repository for helping my students learn how to use the useContext hook in React.',
        techs: ['js', 'react']
    },
    {
        name: 'dug.wtf',
        github: 'https://github.com/dugalcedo/dugwtf-2024',
        deploy: 'https://dug.wtf',
        desc: 'My own personal website, mainly for showcasing my electronic music.',
        techs: ['html', 'css', 'js', 'svelte']
    }
]

export const mount = (component, { projectsList }) => {
    projects.forEach(project => {
        projectsList.innerHTML += `
            <div class="project">
                <h3>${project.name}</h3>
                <div class="desc">
                    ${project.desc}
                </div>
                <div class="techs">
                    ${project.techs.map(t => `
                        <dug-tooltip data-text="${t}">
                            <img src="/icons/${t}.svg" alt="${t}" />
                        </dug-tooltip>
                    `).join("")}
                </div>
                <nav>
                    ${!project.deploy ? "" : `                    
                        <a href="${project.deploy}" target="_blank">
                            <button>
                                view
                            </button>
                        </a>
                    `}
                    ${!project.github ? "" : `                    
                        <a href="${project.github}" target="_blank">
                            <button>
                                view on github
                            </button>
                        </a>
                    `}
                </nav>
            </div>
        `
    })
}