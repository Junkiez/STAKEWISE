import poolDeposits from './assets/poolDeposits.png';
import poolDeposits2 from './assets/addPoolDeposit.png';
import ethereum from './assets/ethereum.png';
import uniswap from './assets/uniswap-logo.png';
import inch from './assets/1inch-logo.png';
import gnosis from './assets/gnosis-safe-logo.png';
import logo from './assets/icon.ico';
import {useEffect, useState} from "react";
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [message, setMessage] = useState({
        color: "",
        text: "",
    });
    const [form, setForm] = useState({
        subject: "",
        email: "",
        message: "",
    })

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Змініть це значення за потребою
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

    }, []);

    return (<>
            <nav
                className={`${scrolled ? 'bg-blue-600' : 'bg-transparent'}  transition-all fixed top-0 z-20 border-gray-200 w-[100%]`}>
                <div className="bg-gradient-to-r h-[50px] from-cyan-400 to-lime-300 w-[100%]">
                    <div
                        className="mx-auto px-4 py-1 flex items-start justify-between text-black sm:items-center md:px-8  w-[100%]">
                        <div className="flex-1 justify-center flex items-start gap-x-4 sm:items-center">
                            <span className="font-medium p-2">
                                <i className="  hidden md:inline-block"></i> <i
                                className="inline-block font-semibold underline duration-150 hover:text-indigo-900 inline-flex items-center gap-x-1">
                                {/*Learn more about our major release!*/}
                                ethStaking V3 is out soon!
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                     className="w-5 h-5">
                                    <path fillRule="evenodd"
                                          d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                          clipRule="evenodd"/>
                                </svg>
                            </i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mx-10 flex flex-wrap items-center justify-between mx-auto p-2">
                    <a href="/#" className="flex items-center">
                        <img src={logo} className="w-[25px]" alt=""/><span className="text-white font-semibold ml-1">ethStaking</span>
                    </a>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                         id="navbar-language">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent">
                            <a href="#stake"
                               className="flex flex-row block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                               aria-current="page">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="28" height="28"
                                     viewBox="0 0 24 24"
                                     stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                                </svg>

                                &nbsp;Stake</a>

                            <a href="#about"
                               className="flex flex-row block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="28" height="28"
                                     viewBox="0 0 32 32"
                                     stroke-width="1.5">
                                    <path
                                        d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm0 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14-6.28 14-14 14zm6.47-21.848-3.722 2.324-2.486 1.55a3.977 3.977 0 0 1 3.712 3.712l1.55-2.484 2.324-3.724a1 1 0 0 0-1.378-1.378zm-10.444 8.11-1.55 2.486-2.324 3.724A.996.996 0 0 0 9 24c.184 0 .368-.05.53-.152l3.722-2.324 2.486-1.55a3.979 3.979 0 0 1-3.712-3.712zm4.236-4.236C16.174 12.02 16.09 12 16 12c-2.21 0-4 1.79-4 4 0 .09.02.174.026.262a3.979 3.979 0 0 0 3.712 3.712c.088.006.172.026.262.026 2.21 0 4-1.79 4-4 0-.09-.02-.174-.026-.262a3.979 3.979 0 0 0-3.712-3.712zM14 16c0-1.102.898-2 2-2s2 .898 2 2-.898 2-2 2-2-.898-2-2z"></path>
                                </svg>
                                &nbsp;About</a>

                            <a href="#features"
                               className="flex flex-row block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="28" height="28"
                                     viewBox="0 0 24 24"
                                     stroke-width="1.5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"/>
                                </svg>
                                &nbsp;Features</a>

                            <a href="#integration"
                               className="flex flex-row block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28"
                                     viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="#fff">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"/>
                                </svg>

                                &nbsp;Integration</a>

                            <a href="#contact"
                               className="flex flex-row block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                     viewBox="0 0 24 24"
                                     stroke-width="1.5" fill="#fff">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                                </svg>

                                &nbsp;Contact</a>

                            <a href="https://forum.eth-staking.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28"
                                     viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"/>
                                </svg>
                            </a>

                            <a href="https://docs.eth-staking.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28"
                                     viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
                                </svg>
                            </a>

                            <a href="https://wellfound.com/company/ethstaking/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28"
                                     viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                </svg>
                            </a>

                        </ul>
                    </div>
                </div>
            </nav>

            <header className="w-[100%] flex flex-col items-center justify-center">
                <h1 className="text-7xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-500 m-10">ETH
                    staking<br/>
                    made effortless</h1>
                <p className="w-[300px] md:w-[600px] text-2xl text-gray-400 font-normal">Our resilient infrastructure
                    and yield
                    strategies give you the best ETH staking experience in the
                    game.</p>
                <a href={'https://app.eth-staking.com'}
                   className="px-5 text-md font-bold m-5 py-3 text-white duration-150 rounded-lg bg-gradient-to-r from-blue-700 to-cyan-500 hover:from-blue-500 hover:to-cyan-700 active:shadow-lg">
                    Start staking
                </a>
            </header>
            <main className="flex flex-col items-center justify-center max-w-[400px] md:max-w-[100%]">
                <section id={'stake'} className="flex flex-col items-center justify-center m-4 lg:m-24">
                    <ScrollAnimation animateIn='fadeIn'>
                        <h2 className="text-grey-100 max-w-[400px] md:max-w-[100%] text-4xl font-bold m-8">Earn
                            rewards from staking Ether</h2>
                    </ScrollAnimation>
                    <p className="w-[400px] md:w-[600px] text-gray-300 text-xl font-light">By depositing ETH into
                        ethStaking, you will
                        participate in Ethereum's Proof-of-Stake consensus mechanism (staking) and receive ETH
                        rewards
                        in
                        return.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-2">
                        <ScrollAnimation animateIn='fadeIn'>
                            <div
                                className="grid grid-cols-6 max-w-[400px] md:max-w-[100%] gap-4 transition-all p-8 md:p-8 border-2 border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 rounded-lg">
                                <svg className="col-auto" width={50} height={50} xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 60 60">
                                    <g transform="matrix(.7742 0 0 .7742 -8.71 -8.71)" fill="#fd5d93">
                                        <path
                                            d="M68.046 31.793h-36.09a3.797 3.797 0 00-2.703 1.117 3.7 3.7 0 00-.663.885 3.784 3.784 0 00-.463 1.828v5.016l-.002.012v26.306c0 .69.56 1.25 1.25 1.25h41.249c.69 0 1.25-.56 1.25-1.25V61.95l.001-.005-.001-.005V40.66l.001-.005v-5.033a3.833 3.833 0 00-3.829-3.83zm-6.774 28.903h-2.99v-9.285h2.99v9.285zm1.25-11.785h-5.49c-.691 0-1.25.56-1.25 1.25v10.535h-1.786v-15.25c0-.69-.56-1.25-1.25-1.25h-5.492c-.69 0-1.25.56-1.25 1.25v15.25H44.22V50.161c0-.69-.56-1.25-1.25-1.25h-5.491c-.69 0-1.25.56-1.25 1.25v10.535h-5.603v-18.79h38.749v18.79h-5.602V50.161c0-.69-.56-1.25-1.25-1.25zM51.496 60.696h-2.992v-14h2.992v14zm-9.777 0h-2.991v-9.285h2.99v9.285zM30.794 34.974a1.27 1.27 0 01.226-.295c.249-.248.581-.386.936-.386h36.09a1.33 1.33 0 011.329 1.33V39.4H30.627v-3.778c0-.226.054-.44.167-.649zm-.169 30.733v-2.51h38.749v2.51H30.625z"></path>
                                        <circle cx="36.316" cy="36.85" r="1.25"></circle>
                                        <circle cx="40.482" cy="36.85" r="1.25"></circle>
                                        <circle cx="44.649" cy="36.85" r="1.25"></circle>
                                        <path
                                            d="M87.5 51.25a1.25 1.25 0 100-2.5H76.964V37.679H87.5a1.25 1.25 0 100-2.5H76.964V24.286c0-.69-.56-1.25-1.25-1.25H64.821V12.5a1.25 1.25 0 10-2.5 0v10.536H51.25V12.5a1.25 1.25 0 10-2.5 0v10.536H37.679V12.5a1.25 1.25 0 10-2.5 0v10.536H24.286c-.69 0-1.25.56-1.25 1.25v10.893H12.5a1.25 1.25 0 100 2.5h10.536V48.75H12.5a1.25 1.25 0 100 2.5h10.536v11.071H12.5a1.25 1.25 0 100 2.5h10.536v10.893c0 .69.56 1.25 1.25 1.25h10.893V87.5a1.25 1.25 0 102.5 0V76.964H48.75V87.5a1.25 1.25 0 102.5 0V76.964h11.071V87.5a1.25 1.25 0 102.5 0V76.964h10.893c.69 0 1.25-.56 1.25-1.25V64.821H87.5a1.25 1.25 0 100-2.5H76.964V51.25H87.5zM74.464 74.464H25.536V25.536h48.928v48.928z"></path>
                                    </g>
                                </svg>
                                <div className="col-span-5 text-left">
                                    <h3 className="text-grey-100 text-2xl font-semibold mb-2">Maximum stability &
                                        uptime</h3>
                                    <p>ethStaking node operators run a highly available and secure infrastructure to
                                        ensure
                                        validators are never penalized.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn'>
                            <div
                                className="grid grid-cols-6 gap-4 max-w-[400px] md:max-w-[100%]  transition-all p-8 border-2 border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 rounded-lg">
                                <svg className="col-auto" width={50} height={50} xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 76.002 60">
                                    <path
                                        d="M70.32 31.258a5.68 5.68 0 00-2.294.502 5.723 5.723 0 00-4.481-2.154 5.768 5.768 0 00-2.553.612l-.078.042-2.327 1.355a5.717 5.717 0 00-4.36-2.01 5.768 5.768 0 00-2.552.613l-.093.052-8.91 5.354a633.2 633.2 0 00-6.406-1.824 235.682 235.682 0 00-6.223-1.658 56.28 56.28 0 00-2.276-.523c-.28-.058-.56-.108-.843-.152a4.79 4.79 0 00-.699-.063c-.183 0-.341.016-.521.038-.657.085-1.59.28-2.691.534-2.25.519-5.12 1.273-6.707 1.697v-2.634c0-1.828-1.524-3.324-3.387-3.324H3.602c-1.863 0-3.387 1.496-3.387 3.324v25.759c0 1.828 1.524 3.323 3.387 3.323h9.317c1.863 0 3.387-1.495 3.387-3.323v-2c2.01.43 6.473 1.375 11.178 2.323 3.182.64 6.47 1.282 9.186 1.765 1.359.242 2.574.444 3.57.587 1.003.142 1.75.23 2.32.234.444-.002.865-.084 1.318-.207.845-.234 1.806-.63 2.906-1.154 3.83-1.832 9.328-5.263 14.516-8.658 5.178-3.39 10.021-6.74 12.394-8.343 1.486-1.005 2.32-2.702 2.32-4.499 0-3.085-2.55-5.585-5.694-5.588zm-56.555 25.54a.85.85 0 01-.846.831H3.602a.85.85 0 01-.846-.83v-25.76c0-.45.387-.83.846-.83h9.317a.85.85 0 01.846.83zm58.489-17.506c-2.919 1.972-9.45 6.497-15.77 10.525-3.159 2.012-6.265 3.9-8.811 5.267-1.272.684-2.407 1.237-3.314 1.606-.453.185-.85.324-1.164.41a2.718 2.718 0 01-.633.114c-.277.002-1.01-.07-1.953-.207-3.337-.48-9.583-1.703-14.961-2.804-2.692-.551-5.17-1.072-6.977-1.454l-2.364-.502V36.258l.964-.258c1.733-.464 3.472-.908 5.215-1.334.82-.2 1.642-.387 2.467-.56.342-.07.641-.126.87-.161.226-.037.401-.05.403-.048.004 0 .137.008.319.035.7.103 2.138.433 3.889.883 5.275 1.352 13.594 3.795 16.954 4.797 1.163.344 2.216.862 2.907 1.491.347.314.608.65.783 1.013.175.365.275.76.276 1.242a3.478 3.478 0 01-1.053 2.495 3.619 3.619 0 01-2.513 1.03l-3.279-.314-11.188-1.41c-1.679-.21-2.003 2.26-.325 2.473l11.225 1.414 3.475.334h.062c3.39-.001 6.136-2.696 6.137-6.021a5.26 5.26 0 00-.522-2.312c-.504-1.038-1.314-1.842-2.23-2.453-.92-.613-1.959-1.05-3.016-1.366-.589-.176-1.332-.397-2.18-.647l6.894-4.144a3.168 3.168 0 011.39-.339c.787 0 1.546.292 2.123.817l-3.406 1.982c-1.457.849-.16 2.992 1.298 2.144l7.906-4.601c.45-.219.91-.342 1.396-.342a3.16 3.16 0 012.237.926l-9.207 5.357c-1.457.849-.16 2.992 1.297 2.144l9.956-5.793c.097-.016.194-.04.289-.08.204-.084.37-.219.498-.378l.31-.181c.45-.219.91-.342 1.396-.342a3.173 3.173 0 012.23.907c.592.58.925 1.367.923 2.188-.004 1.045-.492 1.957-1.223 2.446z"
                                        fill="#00f2c3"></path>
                                    <switch transform="matrix(.29333 0 0 .29333 26.898 1.287)" fill="#00f2c3">
                                        <g>
                                            <path
                                                d="M18.842 50.52c.005.202.048.394.129.579.026.062.046.122.082.179.125.209.284.4.508.536l.012.004c.004.002.005.007.009.009l29.756 17.435c.023.014.05.007.075.021.214.11.45.192.711.192.261 0 .497-.082.713-.196.027-.011.058-.007.084-.021L80.148 51.82c.229-.136.389-.331.519-.544.035-.059.057-.114.082-.177.082-.186.125-.377.132-.579 0-.043.028-.078.025-.119 0-.019-.015-.032-.019-.051a1.501 1.501 0 00-.2-.663L51.459.758c-.011-.02-.03-.028-.043-.047-.035-.056-.078-.1-.121-.15a1.774 1.774 0 00-.172-.175c-.048-.039-.091-.082-.142-.114-.02-.014-.03-.034-.05-.046-.034-.021-.071-.021-.105-.038A1.463 1.463 0 0050.615.1c-.062-.022-.124-.044-.191-.057a1.088 1.088 0 00-.196-.021C50.192.018 50.16 0 50.124 0c-.036 0-.064.018-.1.02-.064.006-.124.007-.186.02-.071.013-.136.036-.206.059a1.421 1.421 0 00-.209.088c-.031.017-.066.017-.097.034-.018.011-.029.03-.046.041-.055.036-.102.08-.154.125a1.623 1.623 0 00-.172.17c-.039.048-.082.091-.114.142-.015.02-.034.03-.047.05l-29.755 48.93c-.129.21-.186.439-.206.672-.002.02-.016.033-.018.054-.001.038.026.074.028.115zM51.68 7.191l23.767 39.791L51.68 36.08zm-3.111 28.88L24.308 47.002 48.569 7.107zm0 3.414v25.718L23.754 50.665zm3.111 25.693V39.501l24.332 11.164z"></path>
                                            <path
                                                d="M80.773 55.836c-.493-.54-1.305-.647-1.935-.286L50.124 72.503 21.421 55.55a1.571 1.571 0 00-1.938.286 1.558 1.558 0 00-.124 1.955l29.495 41.555c.023.032.061.042.084.071.061.074.122.139.193.2.034.028.054.071.091.096.029.021.066.012.097.032.05.029.093.071.148.098.198.096.417.157.651.157h.01c.234 0 .452-.062.651-.157.055-.026.098-.068.148-.098.03-.021.067-.011.097-.032.037-.024.057-.067.091-.096.071-.062.133-.126.192-.2.023-.029.062-.039.084-.071l29.506-41.555a1.554 1.554 0 00-.124-1.955zM48.569 75.202v18.362L26.123 61.942zm3.111 18.362V75.202l22.455-13.26z"></path>
                                        </g>
                                    </switch>
                                </svg>
                                <div className="col-span-5 text-left">
                                    <h3 className="text-grey-100 text-2xl font-semibold mb-2">DeFi strategies</h3>
                                    <p>ethStaking is integrated with many DeFi projects that can help you boost your
                                        staked
                                        ETH earnings.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn'>
                            <div
                                className="grid grid-cols-6 gap-4 max-w-[400px] md:max-w-[100%]  transition-all p-8 border-2 border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 rounded-lg">
                                <svg className="col-auto" width={50} height={50} xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 62.553 60">
                                    <g fill="#ff8d72">
                                        <path
                                            d="M61.915 0H.638A.638.638 0 000 .638v43.405a.638.638 0 00.638.638h30v14.042H18.511a.638.638 0 000 1.277h25.532a.638.638 0 000-1.277H31.915V44.681h30a.638.638 0 00.638-.638V.638A.638.638 0 0061.915 0zm-.638 43.404h-60V1.277h60v42.127z"></path>
                                        <path
                                            d="M8.298 11.49h22.979a.638.638 0 000-1.277H8.297a.638.638 0 000 1.276zm0 5.106h22.979a.638.638 0 000-1.277H8.297a.638.638 0 000 1.277zm0 17.872h12.766a.638.638 0 00.638-.638v-5.107a.638.638 0 00-.638-.638H8.298a.638.638 0 00-.638.638v5.107a.638.638 0 00.638.638zm.638-5.106h11.49v3.83H8.936v-3.83zm-.638-7.66h12.766a.638.638 0 000-1.276H8.298a.638.638 0 000 1.276zM38.692 32.4a.645.645 0 00.696-.138l4.436-4.432 3.268 6.296a.638.638 0 00.858.273l2.664-1.379a.643.643 0 00.275-.862l-3.049-5.876h5.772a.636.636 0 00.431-1.11L39.368 11.707a.638.638 0 00-1.07.471V31.81a.638.638 0 00.394.59zm.882-18.77l12.397 11.374H46.79a.64.64 0 00-.568.932l3.237 6.243-1.53.791-3.376-6.503a.638.638 0 00-1.017-.158l-3.962 3.961V13.63z"></path>
                                    </g>
                                </svg>
                                <div className="col-span-5 text-left">
                                    <h3 className="text-grey-100 text-2xl font-semibold mb-2">Real-time monitoring</h3>
                                    <p>ethStaking provides comprehensive details about validators to keep you aware of
                                        rewards & performance.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn'>
                            <div
                                className="grid grid-cols-6 gap-4 max-w-[400px] md:max-w-[100%]  transition-all p-8 border-2 border-transparent hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/50 rounded-lg">
                                <svg className="col-auto" width={50} height={50} xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 60 60">
                                    <path
                                        d="M26.68 33.32a4.67 4.67 0 01.063-6.64 4.67 4.67 0 016.639.063 4.67 4.67 0 01-.063 6.639c-1.879 1.754-4.822 1.754-6.638-.063zm-3.695-13.967a12.927 12.927 0 014.635-1.88v-2.38c0-.563.501-1.064 1.065-1.064h2.88c.564 0 1.065.501 1.065 1.065v2.38c1.629.313 3.195.94 4.573 1.941l1.69-1.69c.439-.439 1.065-.376 1.504 0l2.004 2.004c.438.438.376 1.064 0 1.503l-1.754 1.753a12.927 12.927 0 011.88 4.635h2.38c.563 0 1.064.501 1.064 1.065v2.88c0 .564-.501 1.065-1.065 1.065h-2.38c-.313 1.629-.94 3.195-1.941 4.573l1.69 1.69c.439.439.376 1.065 0 1.504L40.272 42.4c-.438.438-1.064.376-1.503 0l-1.753-1.754a12.927 12.927 0 01-4.635 1.88v2.38c0 .563-.501 1.064-1.065 1.064h-2.88c-.564 0-1.065-.501-1.065-1.065v-2.38c-1.629-.313-3.195-.94-4.573-1.941l-1.69 1.69c-.439.439-1.065.376-1.504 0L17.6 40.272c-.438-.438-.376-1.064 0-1.503l1.691-1.69a12.927 12.927 0 01-1.879-4.635h-2.38c-.563 0-1.064-.501-1.064-1.065v-2.881c0-.564.5-1.065 1.064-1.065h2.38c.313-1.628.94-3.194 1.942-4.572l-1.691-1.69c-.439-.44-.376-1.066 0-1.504l2.004-2.004c.438-.439 1.065-.376 1.503 0l1.816 1.69zm1.817 5.386a7.353 7.353 0 00-.063 10.46c2.881 2.88 7.578 2.943 10.522.062 2.881-2.881 2.944-7.578.063-10.522-2.944-2.881-7.641-2.881-10.522 0zm11.9-8.643H34.76v-7.64a5.32 5.32 0 015.324-5.324h1.628a4.096 4.096 0 013.946-3.07c2.254 0 4.07 1.817 4.07 4.072s-1.816 4.07-4.07 4.07a4.096 4.096 0 01-3.946-3.068H40.02a3.368 3.368 0 00-3.382 3.382v7.578zm6.764-12.025c0 1.19.939 2.13 2.129 2.13s2.13-.94 2.13-2.13-.94-2.13-2.13-2.13-2.13 1.003-2.13 2.13zm-14.468 7.954V8.08a4.096 4.096 0 01-3.069-3.945c0-2.255 1.816-4.071 4.071-4.071s4.071 1.816 4.071 4.07a4.096 4.096 0 01-3.069 3.946v3.946h-2.004zM30 6.2c1.19 0 2.13-.939 2.13-2.129s-.94-2.13-2.13-2.13-2.13.94-2.13 2.13.94 2.13 2.13 2.13zm-4.697 2.255v7.641H24.05c-.25 0-.438 0-.689.063V8.455a3.368 3.368 0 00-3.382-3.382h-1.628a4.096 4.096 0 01-3.946 3.069c-2.255 0-4.071-1.816-4.071-4.071S12.15 0 14.405 0a4.096 4.096 0 013.946 3.069h1.628c2.944.063 5.324 2.442 5.324 5.386zm-8.769-4.384c0-1.19-.939-2.13-2.129-2.13s-2.13.94-2.13 2.13.94 2.13 2.13 2.13 2.13-.94 2.13-2.13zM23.8 43.967h1.503v7.64a5.32 5.32 0 01-5.324 5.324h-1.628A4.096 4.096 0 0114.405 60c-2.255 0-4.071-1.816-4.071-4.071s1.816-4.071 4.071-4.071a4.096 4.096 0 013.946 3.069h1.628a3.368 3.368 0 003.382-3.382v-7.641c.125 0 .25.063.439.063zm-7.266 11.962c0-1.19-.939-2.13-2.129-2.13s-2.13.94-2.13 2.13.94 2.13 2.13 2.13 2.13-1.003 2.13-2.13zm17.537 0C34.071 58.184 32.255 60 30 60s-4.071-1.816-4.071-4.071a4.096 4.096 0 013.069-3.946v-3.945h1.941v3.883a4.101 4.101 0 013.132 4.008zm-1.942 0c0-1.19-.939-2.13-2.129-2.13s-2.13.94-2.13 2.13.94 2.13 2.13 2.13 2.13-1.003 2.13-2.13zm17.537 0A4.063 4.063 0 0145.595 60a4.096 4.096 0 01-3.946-3.069h-1.628a5.32 5.32 0 01-5.324-5.323v-7.641h1.253c.25 0 .438 0 .689-.063v7.704a3.368 3.368 0 003.382 3.382h1.628a4.096 4.096 0 013.946-3.07c2.255-.125 4.071 1.754 4.071 4.009zm-1.942 0c0-1.19-.939-2.13-2.129-2.13s-2.13.94-2.13 2.13.94 2.13 2.13 2.13 2.13-1.003 2.13-2.13zm-31.69-30.626H8.454a5.32 5.32 0 01-5.323-5.324v-1.628a4.096 4.096 0 01-3.07-3.946c0-2.255 1.817-4.071 4.072-4.071s4.07 1.816 4.07 4.071a4.096 4.096 0 01-3.068 3.946v1.628a3.368 3.368 0 003.382 3.382h7.64v1.942zM6.2 14.405c0-1.19-.939-2.13-2.129-2.13s-2.13.94-2.13 2.13.94 2.13 2.13 2.13 2.13-.94 2.13-2.13zm1.88 14.656h3.945v1.941H8.08a4.096 4.096 0 01-3.945 3.069C1.879 34.071.063 32.255.063 30s1.816-4.071 4.07-4.071c1.88 0 3.508 1.315 3.946 3.132zM6.2 30c0-1.19-.939-2.13-2.129-2.13s-2.067.94-2.067 2.13.94 2.13 2.13 2.13S6.2 31.19 6.2 30zM5.073 40.02v1.63a4.096 4.096 0 013.069 3.945c0 2.255-1.816 4.071-4.071 4.071S0 47.85 0 45.595a4.096 4.096 0 013.069-3.946v-1.628a5.32 5.32 0 015.323-5.324h7.641v1.253c0 .25 0 .438.063.689h-7.64c-1.88.062-3.383 1.566-3.383 3.382zm-1.002 3.446c-1.19 0-2.13.939-2.13 2.129s.94 2.13 2.13 2.13 2.13-.94 2.13-2.13-.94-2.13-2.13-2.13zM60 45.595c0 2.255-1.816 4.071-4.071 4.071s-4.071-1.816-4.071-4.071a4.096 4.096 0 013.069-3.946v-1.628a3.368 3.368 0 00-3.382-3.382h-7.641v-1.942h7.64a5.32 5.32 0 015.324 5.324v1.628c1.754.439 3.132 2.004 3.132 3.946zm-2.004 0c0-1.19-.94-2.13-2.13-2.13s-2.066.94-2.066 2.13.939 2.13 2.129 2.13 2.067-.94 2.067-2.13zM60 30a4.063 4.063 0 01-4.071 4.071 4.096 4.096 0 01-3.946-3.069h-3.945v-1.941h3.883a4.096 4.096 0 013.945-3.07C58.121 25.93 60 27.746 60 30zm-2.004 0c0-1.19-.94-2.13-2.13-2.13S53.8 28.81 53.8 30s.939 2.13 2.129 2.13 2.067-.94 2.067-2.13zM60 14.405a4.096 4.096 0 01-3.069 3.946v1.628a5.32 5.32 0 01-5.323 5.324h-7.641V24.05c0-.25 0-.438-.063-.689h7.704a3.368 3.368 0 003.382-3.382v-1.628a4.096 4.096 0 01-3.07-3.946 4.063 4.063 0 014.072-4.071c2.13 0 4.008 1.816 4.008 4.071zm-2.004 0c0-1.19-.94-2.13-2.13-2.13s-2.066.94-2.066 2.13.939 2.13 2.129 2.13 2.067-.94 2.067-2.13z"
                                        fill="#1d8cf8"></path>
                                </svg>
                                <div className="col-span-5 text-left">
                                    <h3 className="text-grey-100 text-2xl font-semibold mb-2">Integration with your
                                        application</h3>
                                    <p>ethStaking API and smart contracts can be integrated into your application to
                                        help
                                        your users stake ETH effortlessly.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>
                <section id={'about'} className="w-[100%] py-14 m-24 ">
                    <div className="text-left mx-auto md:px-8">
                        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                            <div
                                className="max-w-[400px] md:max-w-xl px-0 md:px-4 space-y-3 mt-6 sm:px-0 md:mt-0">
                                <ScrollAnimation animateIn='fadeIn'>
                                    <h2 className="text-grey-100 text-5xl md:text-6xl font-bold m-8">
                                        Join staking pool
                                    </h2>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn'>
                                    <p className="mt-3 ml-8 text-xl font-normal text-gray-300 mr-10">
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat
                                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                        qui
                                        officia deserunt mollit anim id est laborum, sed ut perspiciatis unde omnis iste
                                        natus
                                        error sit voluptatem accusantium doloremque laudantium
                                    </p>
                                    <ul className="mt-3 ml-8 text-xl max-w-[400px] md:max-w-[100%] font-normal text-gray-300">
                                        <li className="mt-3 ml-8 text-xl max-w-[400px] md:max-w-[100%]">No limits -
                                            stake
                                            any amount
                                        </li>
                                        <li className="mt-3 ml-8 text-xl max-w-[400px] md:max-w-[100%]">Track your
                                            earnings in real time
                                        </li>
                                        <li className="mt-3 ml-8 text-xl max-w-[400px] md:max-w-[100%]">Use your stake
                                            in
                                            DeFi with ethStaking tokens
                                        </li>
                                    </ul>
                                    <p className="font-medium p-2 mt-3 ml-8">
                                        <a href="https://app.eth-staking.com"
                                           className="font-semibold underline duration-150 text-blue-600 hover:text-blue-100 inline-flex items-center gap-x-1">
                                            Find out more
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor"
                                                 className="w-5 h-5">
                                                <path fillRule="evenodd"
                                                      d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                                      clipRule="evenodd"/>
                                            </svg>
                                        </a>
                                    </p>
                                </ScrollAnimation>
                            </div>
                            <ScrollAnimation animateIn='fadeIn'>
                                <div className="relative flex-1 sm:hidden ml-[100px] top-0 z-10 hidden lg:block">
                                    <img
                                        src={poolDeposits2}
                                        className="w-lg  rounded-lg"
                                        alt=""
                                    />
                                    <img
                                        src={poolDeposits}
                                        className="w-lg rounded-lg absolute top-10 z-11 left-[-150px]"
                                        alt=""
                                    />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
                <section id={'features'} className="w-[100%] py-14 m-24">
                    <div className="max-w-screen-xl text-left mx-auto md:px-8">
                        <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                            <div
                                className="max-w-[400px] md:max-w-xl ml-6 md:ml-0 px-0 md:px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                                <ScrollAnimation animateIn='fadeIn'>
                                    <h2 className="text-grey-100 max-w-[400px] md:max-w-[100%] text-4xl md:text-6xl font-bold m-0 md:m-8">
                                        Tokenized staking
                                    </h2>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn'>
                                    <p className="mt-3 ml-0 md:ml-8 max-w-[400px] md:max-w-[100%] text-xl font-normal text-gray-300">
                                        Explore the world of DeFi together with ethStaking!
                                        We mint Deposit Tokens and Reward Tokens for every ETH you deposit & earn. Use
                                        them
                                        to
                                        store, exchange and transfer your deposit & rewards in just about any protocol
                                        and
                                        wallet that supports ERC-20.
                                    </p>
                                    <ul className="mt-3 ml-0 md:ml-8 max-w-[400px] md:max-w-[100%] text-xl font-normal text-gray-300">
                                        <li className="mt-3 ml-8 text-xl max-w-[400px] md:max-w-[100%]">Enables exit
                                            from
                                            staking before Phase 2
                                        </li>
                                        <li className="mt-3 ml-8 text-xl max-w-[400px] md:max-w-[100%]">Opens
                                            opportunities to generate additional yield
                                        </li>
                                    </ul>
                                </ScrollAnimation>
                            </div>
                            <ScrollAnimation animateIn='fadeIn'>
                                <div className="relative flex-1 sm:hidden lg:block">
                                    <img
                                        src={ethereum}
                                        className="w-sm md:w-lg md:w-lg rounded-lg hidden md:block"
                                        alt=""
                                    />
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>
                <section id={'integration'} className="flex flex-col items-center justify-center m-4 lg:m-24">
                    <ScrollAnimation animateIn='fadeIn'>
                        <h2 className="text-grey-100 text-3xl sm:text-4xl font-bold m-4 sm:m-8">Integrations</h2>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeIn'>
                        <p className="text-gray-300 w-[400px] md:w-[600px] text-base sm:text-xl font-light px-4 sm:px-0 max-w-2xl text-center">Our
                            staking services and tokens are integrated with the leading protocols and apps in DeFi.</p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='fadeIn'>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center mt-4">
                            <div className="p-4">
                                <img className="max-w-[150px] md:max-w-[250px] mx-auto" src={inch} alt="1inch"/>
                            </div>
                            <div className="p-4">
                                <img className="max-w-[150px] md:max-w-[250px] mx-auto" src={gnosis} alt="gnosis"/>
                            </div>
                            <div className="p-4">
                                <img className="max-w-[150px] md:max-w-[250px] mx-auto" src={uniswap} alt="uniswap"/>
                            </div>
                        </div>
                    </ScrollAnimation>
                </section>
                <section id={'contact'} className="flex flex-col items-center justify-center m-4 lg:m-24">
                    <ScrollAnimation animateIn='fadeIn'>
                        <h2 className="text-grey-100 text-4xl font-bold m-8">Keep in touch</h2>
                    </ScrollAnimation>
                    <p className="w-[400px] md:w-[600px] text-gray-300 text-xl font-light">
                        For further information about the project, its features, plans, or cooperation, please contact
                        us on any of the below.
                    </p>
                    <ScrollAnimation animateIn='fadeIn'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2">
                            <div className="my-12">
                                {/*
                                <div className="grid grid-rows-2 justify-center m-8">
                                    <div className="flex items-center ">
                                        <svg fill="#0077ff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             width="50"
                                             height="50" viewBox="0 0 48 48">
                                            <path
                                                d="M5.83,23.616c12.568-5.529,28.832-12.27,31.077-13.203c5.889-2.442,7.696-1.974,6.795,3.434 c-0.647,3.887-2.514,16.756-4.002,24.766c-0.883,4.75-2.864,5.313-5.979,3.258c-1.498-0.989-9.059-5.989-10.7-7.163 c-1.498-1.07-3.564-2.357-0.973-4.892c0.922-0.903,6.966-6.674,11.675-11.166c0.617-0.59-0.158-1.559-0.87-1.086 c-6.347,4.209-15.147,10.051-16.267,10.812c-1.692,1.149-3.317,1.676-6.234,0.838c-2.204-0.633-4.357-1.388-5.195-1.676 C1.93,26.43,2.696,24.995,5.83,23.616z"></path>
                                        </svg>
                                        <span
                                            className="text-grey-100 text-2xl font-semibold mb-2 ml-[14px]">Chat on Telegram</span>
                                    </div>
                                    <a className="mr-24 hover:text-white text-blue-600 ml-[64px]">Open chat</a>
                                </div>

                                <div className="grid grid-rows-2 items-left justify-center m-8">
                                    <div className="flex items-center">
                                        <svg fill="#0077ff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             width="50"
                                             height="50" viewBox="0 0 48 48">
                                            <path
                                                d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                                        </svg>
                                        <span
                                            className="text-grey-100 text-2xl font-semibold mb-2 ml-[14px]">Chat on Discord</span>
                                    </div>
                                    <a className="mr-24 hover:text-white text-blue-600 ml-[64px]">Open chat</a>
                                </div>
                                */}
                                <div className="grid grid-rows-2 items-left justify-center m-8">
                                    <div className="flex items-center">
                                        <svg fill="#0077ff" height="50" width="50" version="1.1" id="Layer_1"
                                             xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink"
                                             viewBox="0 0 512 512" xmlSpace="preserve">
                                            <g>
                                                <g>
                                                    <path d="M496.327,127.091l-15.673,9.613L281.83,258.623c-7.983,4.859-16.917,7.293-25.84,7.293s-17.826-2.424-25.778-7.262
			l-0.136-0.084L31.347,134.771l-15.673-9.759L0,115.242v302.717h512V117.488L496.327,127.091z"/>
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M25.245,94.041l25.161,15.673l25.161,15.673l171.008,106.527c5.841,3.521,13.082,3.511,18.913-0.042l173.652-106.486
			l25.558-15.673l25.558-15.673H25.245z"/>
                                                </g>
                                            </g>
                                        </svg>
                                        <span className="text-grey-100 text-2xl font-semibold mb-2 ml-[14px]">Send an email</span>
                                    </div>
                                    <a className="mr-10 hover:text-white text-blue-600 ml-[64px]"
                                       href="mailto:info@eth-staking.io">info@eth-staking.io</a>
                                </div>
                            </div>
                            <div className=" shadow-md  mt-12 p-8 bg-[#19283C] rounded-xl">
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault()
                                        if (form.subject && form.email && form.message) {
                                            setMessage({color: "lime", text: "Your message was successfully sent!"}
                                            )
                                            return;
                                        }
                                        setMessage({color: "red", text: "Please, fill in all fields"})
                                    }
                                    }
                                    className="space-y-5 w-64 md:w-96"
                                >
                                    <div>
                                        <label className="font-medium">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            value={form.subject}
                                            onChange={e => setForm({...form, subject: e.target.value})}
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-blue-900 focus:border-blue-700 shadow-sm rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-medium">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            value={form.email}
                                            onChange={e => setForm({...form, email: e.target.value})}
                                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border border-blue-900 focus:border-blue-700 shadow-sm rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="font-medium">
                                            Message
                                        </label>
                                        <textarea value={form.message}
                                                  onChange={e => setForm({...form, message: e.target.value})}
                                                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border border-blue-900 focus:border-blue-700 shadow-sm rounded-lg"></textarea>
                                    </div>
                                    {message.color == 'lime' ?
                                        <p className="text-center text-lime-500">{message.text}</p> :
                                        <p className="text-center text-red-500">{message.text}</p>}
                                    <button type="submit"
                                            className="px-5 text-md font-bold m-5 py-3 text-white duration-150 rounded-lg bg-gradient-to-r from-blue-700 to-cyan-500 hover:from-blue-500 hover:to-cyan-700 active:shadow-lg"
                                    >
                                        Send
                                    </  button>
                                </form>
                            </div>
                        </div>
                    </ScrollAnimation>
                </section>
            </main>
            <footer className="sm:w-[95%] w-full flex flex-wrap justify-end m-4 font-normal text-sm items-center">
                <a href="https://stakewise.io/terms-and-conditions"
                   className="text-blue-500 hover:text-blue-700 mr-1 sm:mr-2">Terms & Conditions</a>
                <span className="mx-1 font-semibold sm:hidden">|</span>
                <a href="https://wellfound.com/company/ethstaking/" target="_blank" className="text-blue-500 hover:text-blue-700 mr-1 sm:mr-2">Careers</a>
                <span className="mx-1 font-semibold sm:hidden">|</span>
                {/*<a href="/#" className="text-blue-500 hover:text-blue-700 mr-1 sm:mr-2">GitHub</a>
                <span className="mx-1 font-semibold sm:hidden">|</span>*/}
                <span className="hidden sm:inline-block">© 2023</span>
                &nbsp;
                <a href="/#" className="text-blue-500 hover:text-blue-700">ethStaking Labs</a>
            </footer>
        </>
    )
}

export default App
