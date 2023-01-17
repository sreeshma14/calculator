function display(data)
{
    result.value+=data
    // result.value=result.value+data
}

function allclear()
{
    result.value=""
} 

function  checkvalue()
{
  result.value = eval(result.value)
}

function backspace(){
    data=result.value
    result.value = data.slice(0,-1)
}