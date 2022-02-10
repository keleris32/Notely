import React, {Dispatch, SetStateAction} from 'react';
import noteIcon from '../images/noteIcon.svg';
import folderIcon from '../images/folderIcon.png';
import settingsIcon from '../images/settingsIcon.png';

interface DesktopNavItemProps {
    Label : string;
    setSelectedButton: Dispatch<SetStateAction<string>>;
    selected: Boolean;
}

const DesktopNavItem : React.FC<DesktopNavItemProps> = ({Label, selected, setSelectedButton}) => {
    const selectedButton = "flex items-center ml-[28px] pl-[10px] py-[10px] rounded-[12px] w-[148px] desktopNavButton focus:outline-[0] ";
    if (Label == "All Notes") {
        return (
            <button className={selected ? selectedButton + 'bg-[rgba(92,66,108,0.35)]' : selectedButton} onClick={() => setSelectedButton(Label)}>
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={selected? 'desktopNavIcon selected' : 'desktopNavIcon'} d="M16.2292 0.25C18.1737 0.25 19.75 1.82633 19.75 3.77083V11.2227C19.75 11.8692 19.4932 12.4892 19.0361 12.9463L12.9463 19.0361C12.4892 19.4932 11.8692 19.75 11.2227 19.75H3.77083C1.82633 19.75 0.25 18.1737 0.25 16.2292V3.77083C0.25 1.82633 1.82633 0.25 3.77083 0.25H16.2292ZM16.2292 1.875H3.77083C2.72379 1.875 1.875 2.72379 1.875 3.77083V16.2292C1.875 17.2762 2.72379 18.125 3.77083 18.125H11.0833V14.6042C11.0833 12.7267 12.5528 11.1925 14.4044 11.0889L14.6042 11.0833H18.125V3.77083C18.125 2.72379 17.2762 1.875 16.2292 1.875ZM16.9756 12.7083H14.6042C13.6095 12.7083 12.7937 13.4744 12.7146 14.4487L12.7083 14.6042V16.9756L16.9756 12.7083Z"/>
                </svg>
                <p className="text-white ml-[11px] desktopNavText  " style={selected ? {} : {color: '#48485D'}}>{Label}</p>
            </button>
        );
    }
    else if (Label == "All Folders") {
        return (
            <button className={selected ? selectedButton + 'bg-[rgba(92,66,108,0.35)]' : selectedButton} onClick={() => setSelectedButton(Label)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={selected? 'desktopNavIcon selected' : 'desktopNavIcon'} d="M22.9712 5.54997H12.184V3.64937C12.184 3.0812 11.7234 2.62061 11.1553 2.62061H3.36239C2.79422 2.62061 2.33363 3.0812 2.33363 3.64937V5.54997H1.02877C0.460594 5.54997 0 6.01056 0 6.57873V20.3508C0 20.919 0.460594 21.3796 1.02877 21.3796H22.9712C23.5394 21.3796 24 20.919 24 20.3508V6.57873C24 6.01056 23.5394 5.54997 22.9712 5.54997ZM4.39116 4.67814H10.1265V5.54997H4.39116V4.67814ZM21.9425 19.322H2.05753V7.60745H21.9425V19.322Z" />
                </svg>
                <p className="text-white ml-[11px] desktopNavText  " style={selected ? {}: {color: '#48485D'} }>{Label}</p>
            </button>
        );
    }
    else {
        return (
            <button className={selected ? selectedButton + 'bg-[rgba(92,66,108,0.35)]' : selectedButton} onClick={() => setSelectedButton(Label)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_549_57)">
                <path className={selected? 'desktopNavIcon selected' : 'desktopNavIcon'} d="M22.7715 9.48074L21.087 9.19497C20.9115 8.62844 20.6859 8.08196 20.4102 7.56055L21.4028 6.1718C21.824 5.5802 21.7588 4.77302 21.2424 4.26164L19.7484 2.7676C19.4676 2.48684 19.0966 2.33142 18.7005 2.33142C18.3897 2.33142 18.0939 2.42668 17.8432 2.60717L16.4494 3.59985C15.908 3.31408 15.3415 3.07844 14.7549 2.90297L14.4741 1.23847C14.3538 0.521531 13.7371 0.00012207 13.0102 0.00012207H10.8995C10.1725 0.00012207 9.55582 0.521531 9.4355 1.23847L9.14471 2.94308C8.58319 3.11855 8.03672 3.34917 7.51531 3.62993L6.13658 2.63725C5.8859 2.45676 5.58509 2.3615 5.27425 2.3615C4.87818 2.3615 4.50217 2.51692 4.22642 2.79768L2.72737 4.29172C2.21599 4.8031 2.1458 5.61028 2.56694 6.20188L3.56965 7.61069C3.2939 8.13711 3.0733 8.68359 2.90284 9.25012L1.23835 9.53088C0.521409 9.6512 0 10.2679 0 10.9948V13.1055C0 13.8325 0.521409 14.4492 1.23835 14.5695L2.94295 14.8603C3.11843 15.4218 3.34905 15.9683 3.62981 16.4897L2.64214 17.8634C2.221 18.455 2.28618 19.2622 2.80257 19.7736L4.29661 21.2676C4.57737 21.5484 4.94837 21.7038 5.34444 21.7038C5.65528 21.7038 5.95108 21.6085 6.20176 21.428L7.61057 20.4253C8.11693 20.691 8.64837 20.9066 9.19485 21.0771L9.47561 22.7616C9.59593 23.4786 10.2126 24 10.9396 24H13.0553C13.7822 24 14.3989 23.4786 14.5192 22.7616L14.805 21.0771C15.3715 20.9016 15.918 20.676 16.4394 20.4003L17.8282 21.3929C18.0789 21.5734 18.3797 21.6687 18.6905 21.6687C19.0866 21.6687 19.4576 21.5133 19.7383 21.2325L21.2324 19.7385C21.7438 19.2271 21.8139 18.4199 21.3928 17.8283L20.4001 16.4345C20.6759 15.9081 20.9065 15.3616 21.077 14.8001L22.7615 14.5194C23.4784 14.399 23.9999 13.7824 23.9999 13.0554V10.9447C24.0099 10.2177 23.4885 9.60107 22.7715 9.48074ZM22.6562 13.0554C22.6562 13.1206 22.6111 13.1757 22.5459 13.1858L20.4402 13.5367C20.1745 13.5818 19.9639 13.7774 19.8988 14.033C19.7083 14.77 19.4175 15.4769 19.0264 16.1337C18.891 16.3643 18.9011 16.6501 19.0565 16.8707L20.2948 18.6154C20.3299 18.6656 20.3249 18.7408 20.2798 18.7859L18.7858 20.2799C18.7507 20.315 18.7156 20.32 18.6905 20.32C18.6604 20.32 18.6354 20.31 18.6153 20.295L16.8756 19.0566C16.66 18.9012 16.3692 18.8912 16.1386 19.0265C15.4818 19.4176 14.7749 19.7084 14.0379 19.8989C13.7772 19.9641 13.5817 20.1797 13.5416 20.4404L13.1856 22.546C13.1756 22.6112 13.1205 22.6563 13.0553 22.6563H10.9446C10.8794 22.6563 10.8242 22.6112 10.8142 22.546L10.4633 20.4404C10.4182 20.1746 10.2226 19.9641 9.96693 19.8989C9.25 19.7134 8.55813 19.4276 7.91138 19.0566C7.80609 18.9965 7.68577 18.9664 7.57046 18.9664C7.43509 18.9664 7.29471 19.0065 7.1794 19.0917L5.42466 20.3401C5.39959 20.3551 5.37452 20.3652 5.34945 20.3652C5.3294 20.3652 5.28929 20.3601 5.2542 20.325L3.76016 18.831C3.71504 18.7859 3.71003 18.7157 3.74512 18.6605L4.97845 16.9309C5.13387 16.7103 5.1439 16.4195 5.00853 16.1889C4.61748 15.5371 4.31666 14.8302 4.12615 14.0932C4.05596 13.8375 3.84539 13.642 3.58469 13.5969L1.46396 13.2359C1.39878 13.2259 1.35366 13.1707 1.35366 13.1055V10.9948C1.35366 10.9297 1.39878 10.8745 1.46396 10.8645L3.55461 10.5135C3.82032 10.4684 4.03591 10.2729 4.10108 10.0122C4.28658 9.27519 4.57236 8.56326 4.9584 7.90649C5.09376 7.67586 5.07872 7.39009 4.9233 7.17451L3.67493 5.41977C3.63984 5.36963 3.64485 5.29443 3.68997 5.24931L5.18401 3.75527C5.2191 3.72018 5.2542 3.71516 5.27927 3.71516C5.30935 3.71516 5.33441 3.72519 5.35447 3.74023L7.08414 4.97356C7.30474 5.12898 7.59552 5.13901 7.82615 5.00364C8.47791 4.61259 9.18482 4.31177 9.92181 4.12126C10.1775 4.05107 10.373 3.8405 10.4182 3.5798L10.7791 1.45906C10.7892 1.39389 10.8443 1.34877 10.9095 1.34877H13.0202C13.0854 1.34877 13.1405 1.39389 13.1505 1.45906L13.5015 3.54971C13.5466 3.81543 13.7421 4.03101 14.0028 4.09619C14.7599 4.28671 15.4818 4.58251 16.1537 4.97858C16.3843 5.11394 16.67 5.10391 16.8906 4.94849L18.6203 3.70513C18.6454 3.69009 18.6705 3.68007 18.6955 3.68007C18.7156 3.68007 18.7557 3.68508 18.7908 3.72018L20.2848 5.21421C20.3299 5.25933 20.3349 5.32952 20.2999 5.38467L19.0615 7.12437C18.9061 7.33996 18.8961 7.63074 19.0314 7.86137C19.4225 8.51814 19.7133 9.22505 19.9038 9.96204C19.969 10.2227 20.1845 10.4183 20.4452 10.4584L22.5509 10.8143C22.6161 10.8244 22.6612 10.8795 22.6612 10.9447V13.0554H22.6562Z" fill={selected? 'white' : '#48485D'}/>
                <path className={selected? 'desktopNavIcon selected' : 'desktopNavIcon'} d="M12.0022 6.81848C9.14451 6.81848 6.82324 9.13975 6.82324 11.9975C6.82324 14.8552 9.14451 17.1765 12.0022 17.1765C14.86 17.1765 17.1812 14.8552 17.1812 11.9975C17.1812 9.13975 14.86 6.81848 12.0022 6.81848ZM12.0022 15.8228C9.89153 15.8228 8.1769 14.1082 8.1769 11.9975C8.1769 9.88677 9.89153 8.17214 12.0022 8.17214C14.1129 8.17214 15.8276 9.88677 15.8276 11.9975C15.8276 14.1082 14.1129 15.8228 12.0022 15.8228Z" fill={selected? 'white' : '#48485D'}/>
                </g>
                <defs>
                <clipPath id="clip0_549_57">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <p className="text-white ml-[11px] desktopNavText  " style={selected ? {} : {color: '#48485D'} }>{Label}</p>
            </button>
        );
    }
};

export default DesktopNavItem;