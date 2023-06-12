import { chakra, AspectRatio } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRobot,
    faLaptopCode,
    faPenFancy,
    faDatabase,
    faSmileBeam,
    faServer,
    faArchway,
    faTruck,
    faInfo,
    faCloud,
    faHeading,
    faRocket,
    faUserAstronaut,
    faRoute,
    faGamepad,
    faKey,
    faLaughBeam,
    faWrench,
    faBug,
    faCommentDots,
    faHourglassHalf,
    faThumbsUp,
    faUserCog,
    faAward,
    faMagic,
    faBolt,
    faRuler,
    faHeart,
    faEye,
    faLink,
    faMobile,
    faUserTie,
    faChessQueen,
    faUtensils,
    faCreditCard,
    faSign,
    faChartLine,
    faBirthdayCake,
    faCamera,
    faMedal,
    faComments,
    faMap,
    faBox,
    faLightbulb,
    faHeadset,
} from '@fortawesome/free-solid-svg-icons';

const iconPicker = (icon) => {
    switch (icon) {
        case "laptop-code":
            return faLaptopCode
        case "pen-fancy":
            return faPenFancy
        case "robot":
            return faRobot
        case "database":
            return faDatabase
        case "smile-beam":
            return faSmileBeam
        case "server":
            return faServer
        case "archway":
            return faArchway
        case "truck":
            return faTruck
        case "info":
            return faInfo
        case "cloud":
            return faCloud
        case "heading":
            return faHeading
        case "rocket":
            return faRocket
        case "user-astronaut":
            return faUserAstronaut
        case "route":
            return faRoute
        case "gamepad":
            return faGamepad
        case "key":
            return faKey
        case "laugh-beam":
            return faLaughBeam
        case "wrench":
            return faWrench
        case "bug":
            return faBug
        case "comment-dots":
            return faCommentDots
        case "hourglass-half":
            return faHourglassHalf
        case "thumbs-up":
            return faThumbsUp
        case "users-cog":
            return faUserCog
        case "award":
            return faAward
        case "magic":
            return faMagic
        case "bolt":
            return faBolt
        case "ruler":
            return faRuler
        case "heart":
            return faHeart
        case "eye":
            return faEye
        case "link":
            return faLink
        case "mobile":
            return faMobile
        case "user-tie":
            return faUserTie
        case "chess-queen":
            return faChessQueen
        case "utensils":
            return faUtensils
        case "credit-card":
            return faCreditCard
        case "sign":
            return faSign
        case "chart-line":
            return faChartLine
        case "birthday-cake":
            return faBirthdayCake
        case "camera":
            return faCamera
        case "medal":
            return faMedal
        case "comments":
            return faComments
        case "map":
            return faMap
        case "box":
            return faBox
        case "lightbulb":
            return faLightbulb
        case "headset":
            return faHeadset
    }
}

export const IconHelper = ({ icon }) => {
    const Icon = chakra(FontAwesomeIcon);
    // console.log("icon ==> ", icon);
    return (

        <AspectRatio w={24} h={24} ratio={1 / 1} width="100%">
            <Icon icon={iconPicker(icon)} />
        </AspectRatio>
    )
}

