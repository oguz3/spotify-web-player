import TitleL from '../component/text/title-l'
import TitleM from '../component/text/title-m'
import TitleS from '../component/text/title-s'

import TextBoldL from '../component/text/text-bold-l'
import TextBoldM from '../component/text/text-bold-m'
import TextRegularM from '../component/text/text-regular-m'

function Search(){
    return (
        <div>
            <TitleL>Title Large Component</TitleL>
            <TitleM>Title Medium Component</TitleM>
            <TitleS>Title Small Component</TitleS>
            
            <TextBoldL>Text Bold Large Component</TextBoldL>
            <TextBoldM>Text Bold Medium Component</TextBoldM>
            <TextRegularM>Text Regular Medium Component</TextRegularM>
        </div>
    );
}

export default Search;