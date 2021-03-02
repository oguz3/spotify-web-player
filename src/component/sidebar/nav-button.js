import TextBoldM from '../text/text-bold-m'

function NavButton({IconName, children}){
    return (
        <button>
            icon eklenecek
            <TextBoldM>{children}</TextBoldM>
        </button>
    );
}

export default NavButton;