let $=function(id){
    return window.document.getElementById(id);
};

$('bt-appliquer').addEventListener('click',function(){
    $('test-zone').style[$('property').value]=$('value').value;
});
$('property').addEventListener('change',function(){
    if($('property').value.toLowerCase().indexOf('color')!=-1){
        $('value').type='color';
    } else{
        $('value').type='text';
    }
});