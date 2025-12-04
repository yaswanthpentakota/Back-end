
function getuser(id,getsubjects){
    console.log("get user details:",id);
    getsubjects(6778);
}
function getsubjects(sub_id,done){
    console.log("get subject id:",sub_id);
    done();
}
getuser("123",function(sub_id){
    getsubjects(sub_id,function(){
        console.log("done")
    })
})
