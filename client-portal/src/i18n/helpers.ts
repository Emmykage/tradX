export function localFlagHandler (countryCode: string){
    switch(countryCode) {
        case "en-US":
        case "en":
        case "en-UK":
            return "/menu-images/uk-flag.png";
        case "id":
            return "/public/menu-images/svgs/IndonesiaFlag.svg";
        case "vi":
            return "/menu-images/svgs/VietnamFlag.svg"
        case "hi":
            return "/menu-images/svgs/IndiaFlag.svg";
        case "ru":
            return "/menu-images/svgs/РусскийFlag.svg";
        case "th":
            return "/menu-images/svgs/ภาษาไทยFlag.svg";
        case "pt":
            return "/menu-images/svgs/PortuguêsFlag.svg";
        case "ms":
            return "/menu-images/svgs/BahasaMelayuFlag.svg";
        
        default:
            return "/menu-images/uk-flag.png";
    }
}