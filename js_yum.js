//案例一
var dream1_content = "财富自由";

function dream1() {
    document.getElementById("results").value = dream1_content;
}

function dream2() {
    var dream2_content = "工作自由";
    document.getElementById("results").value = dream2_content;
}

function dream3() {
    document.getElementById("results").value = "家庭幸福";
}

//案例二 弹窗
function ale() {
    alert("操作成功！");
}

function con() {
    res = confirm("请问你要删除此商品吗？");
    if (res == true) {
        alert("删除！");
    }
}

function pro() {
    res = prompt("请输入要删除商品的的编号！");
    document.getElementById("number").value = res;
}

//案例三 计算
function count() {
    var data_number = document.getElementById("data_number").value;
    data_number_int = parseInt(data_number)
    var data_per = document.getElementById("data_per").value;
    data_per_int = parseInt(data_per)

    if (data_number !== "" && data_per !== "") {
        if (!isNaN(data_number_int) && !isNaN(data_per_int)) { //isNaN表示不是一个数字
            var mode = document.getElementById("mode").value;
            mode = parseInt(mode); //parseInt表示把字符串转成整形
            switch (mode) {
                case 9:
                case 8:
                case 7:
                case 6:
                    var data_count = data_number * data_per * (mode / 10);
                    break;
                default:
                    alert("请选择支付方式！")
            }
            document.getElementById("data_final").value = data_count;


        } else {
            alert("Q币数量和Q币单价只能输入数字")
        }

    } else {
        alert("Q币数量和Q币单价不能为空")
    }

}