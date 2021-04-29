import Interior from './interior.png';
import GaiasSandbox from './GaiasSandbox.png'
import Grubdex from './grubdex.png'

const projectList = [
    {
        projectName: 'Interior',
        image: Interior,
        gitHubFrontend: 'https://github.com/cswilik/interior-frontend',
        gitHubBackend: 'https://github.com/cswilik/interior-backend',
        stack: ['Rails', 'React Hooks', 'Redux'],
        description: 'A form of travel app that allows users to track and share their visits to America’s National Parks.',
        demo: 'NdhnFYzH2DM'
    },
    {
        projectName: 'Gaias Sandbox',
        image: GaiasSandbox,
        gitHubFrontend: 'https://github.com/cswilik/gaias-sandbox-frontend',
        gitHubBackend: 'https://github.com/cswilik/gaias-sandbox-backend',
        stack: ['Rails', 'React Hooks'],
        description: 'An app where you can control the weather for regions across the US. Using various parameters, a conditional image will be rendered atop each region. Weather data is persistent for each individual user.',
        link: 'https://gaias-sandbox.herokuapp.com/',
        demo: 'DVUo4A6czbg'
    },
    {
        projectName: 'Grubdex',
        image: Grubdex,
        gitHubFrontend: 'https://github.com/cswilik/grubdex-frontend',
        gitHubBackend: 'https://github.com/cswilik/grubdex-backend',
        stack: ['Rails', 'javascript', 'Bootstrap'],
        description: 'Grubdex is a personal restaurant organizer application designed for users to customize their own lists for future reference.',
        demo: 'EN5RUkR7gv8'
    }
]

export default projectList;