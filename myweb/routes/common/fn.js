//함수를 객체 안에 감싸 넣기
var fn = {
  list: function (req,res,next){
    var no = req.query.pageNo;
    res.end('list page ' + no);
  },
  view: function(){
      //blahblah
  },
  delete: function(){
    
  }

};


module.exports = fn;