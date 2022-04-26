export function LongText({ text, isLongTxtShown ,onToggleText}) {
    return <section>
       {isLongTxtShown?<p>{text} <span onClick={()=>onToggleText()}>Show less</span></p>:<p>{text.substring(0,99)}...<span onClick={()=>onToggleText()}>Show more</span></p>}
    </section>
}