//class
var appNew = function (name, display, content, reednews,) {
    //Thuoc Tinh
    this.name = name;
    this.display = display;
    this.content = content;
    this.reednews = reednews;


    this.getName = function () {
        return this.name
    };

    this.getdisplay = function () {
        document.write(" Danh sách tin tóm lược : " + "</br>" + " Tin 01 : Cùng dự có các vị lãnh đạo, nguyên lãnh đạo Đảng, Nhà nước; các vị Ủy viên Bộ Chính trị" + "</br>" + " Tin 02 : Cùng dự có các vị lãnh đạo, nguyên lãnh đạo Đảng, Nhà nước; các vị Ủy viên Bộ Chính trị," + "</br>" + " Tin 01 : Cùng dự có các vị lãnh đạo, nguyên lãnh đạo Đảng, Nhà nước; các vị Ủy viên Bộ Chính trị,")
    };

    this.getcontent = function () {
        var promptUse = prompt(" Nào , hãy đăng một thông tin mới đi ! ^^ ");
        document.write(" ôi ngon . Tin của bạn đã được đăng xem đi này : " + promptUse);
    };

    this.getReedNews = function () {
        document.write(" Tin mới nhất trong ngày : " + "</br>");
        document.write("</br>");
        document.write(" Tiêu đề : Tin mới " + "</br>" + " Nội dung : Cùng dự có các vị lãnh đạo, nguyên lãnh đạo Đảng, Nhà nước; các vị Ủy viên Bộ Chính trị, Bí thư Trung ương Đảng, Phó Chủ tịch nước, Phó Thủ tướng Chính phủ, Phó Chủ tịch Quốc hội; các vị lão thành cách mạng và lãnh đạo các ban, bộ, ngành, đoàn thể Trung ương." + "</br>" + " Ngày đăng  : 18.02.2018" + "</br>" + " Số lượt xem : 1000 Lượt xem")
    };

};

// List
var List = function () {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.length = length;
    this.find = find;
    this.remove = remove;

    this.append = function (element) {
        this.dataStore[this.listSize++] = element;
    };

    this.toString = function () {
        return this.dataStore;
    };

    this.length = function () {
        return this.listSize;
    };
    this.find = function (element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i].getName() == element) {
                return i;
            }
        }
        return -1;
    };

    function remove(element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

};


// Search
function get() {
    var index = 0;
    var search = prompt(" Nhập tin theo tiêu đề bạn muốn tìm đi ! ");
    for (var i = 1; i <= app2.dataStore.length; i++) {
        if (app2.toString()[i - 1].getName() === search) {
            index = i;
            break;
        }
    }
    if (index > 0) {
        alert(" Tiêu đề tin bạn muốn tìm đây nhé : " + search)
        alert(" Bạn có muốn đọc nó không. ");
        var x = prompt(" YES or  NO ");
        x = true;
        if (x === true) {
            document.write(" Cùng dự có các vị lãnh đạo, nguyên lãnh đạo Đảng, Nhà nước; các vị Ủy viên Bộ Chính trị ")
        }
        else {
            document.write(" Thoat di !")
        }

    } else {
        alert(" ôi không tiêu đề bạn tìm không có rồi !  ")
    }
}


// doi tuong 01.
var app1 = new appNew();

// cac doi tuong them vao list
var nv1 = new appNew();
var nv2 = new appNew("tin 01");
var nv3 = new appNew("tin 02");
var nv4 = new appNew("tin 03");

var app2 = new List();
app2.append(nv1);
app2.append(nv2);
app2.append(nv3);
app2.append(nv4);

function main1() {
    app1.getReedNews();
}

function main2() {
    app1.getcontent();

}

function main3() {
    app1.getdisplay();

}

function main4() {
    alert(" Lưu ý : có 3 tin theo  tiêu đề thôi nhé : tin 01, tin 02, tin 03  nhập sai là không tìm được đâu. ahihi ^^ ");
    get();

}



//  EM CHƯA XONG PHẦN NÀY
function main() {
    alert("  EM CHƯA XONG PHẦN NÀY");
    var x = prompt(" nhap  tin muon xoa");
    app2.remove(nv5);

    for (i = 0; i <= app2.listSize; i++) {
        document.write((i + 1) + ". " + app2.toString()[i].name);
    }

};