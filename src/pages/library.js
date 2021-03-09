import Topnav from '../component/topnav/topnav';

function Library({children}){
    return (
        <div>
            <Topnav />
            {children}
        </div>
    );
}

export default Library;