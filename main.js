function get_paragraph()
{
    var input = [];

    for(var i=1; i<=6; i++ ){

        inputs.push(document.getElementById ("input_box_"+i).value);

        inputs.join (". ");

        document.getElementById (showParagraph1).innerHTML=inputs.join (". ");;
    }
    

}