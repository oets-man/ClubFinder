const displayTime = () => {
  moment.locale("id");
  // $(".time").text(moment().format("LTS"));
  $(".time").text(moment().format("DD/MM/YYYY h:mm:ss.SSS A"));
  $(".date").text(moment().format("LL"));
};

const updateTime = () => {
  displayTime();
  setTimeout(updateTime, 100);
};

updateTime();
