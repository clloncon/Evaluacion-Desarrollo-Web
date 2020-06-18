// -----------------------------------------menu-------------------------------------------------
var user = ["mlillo@correo.com", "mflores@correo.com", "jtolorza@correo.com", "mgaete@correo.com", "clloncon@correo.com"];
var pswd = ["e0c826b1c1532015b386addb63147c5e", "143d42165dfaa0e4870b787d8d0cb125", "048056ad6efca97d0b4cff5f0114bb09", "6896feb8e3499d6dc48e4dc5625b4020", "2b9ff3efc4a999ecfacd18c4bbc57a2e"];
var userIndex

$(document).ready(function() {

    $("#input_submit").click(function() {

        for (let index = 0; index < user.length; index++) {
            contU = 0;
            contP = 0;
            if ($("#field_email").val() == user[index]) {
                contU++;
                if (md5($("#field_password").val()) == pswd[index]) {
                    localStorage["user"] = user[index].substr(0, user[index].indexOf('@'));
                    window.open("index.html", "_self")
                    contP++;
                    break;
                }
            }
        }
        if (contU == 0) {
            $("#dialog1").dialog("open");
        }
        if (contP == 0 && contU != 0) {
            $("#dialog2").dialog("open");
        }

    });

});



$(function() {
    var dialog, form,

        // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
        emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        email = $("#email"),
        password = $("#password"),
        allFields = $([]).add(email).add(password),
        tips = $(".validateTips");

    function updateTips(t) {
        tips
            .text(t)
            .addClass("ui-state-highlight");
        setTimeout(function() {
            tips.removeClass("ui-state-highlight", 1500);
        }, 500);
    }

    function checkLength(o, n, min, max) {
        if (o.val().length > max || o.val().length < min) {
            o.addClass("ui-state-error");
            updateTips("Length of " + n + " must be between " +
                min + " and " + max + ".");
            return false;
        } else {
            return true;
        }
    }

    function checkRegexp(o, regexp, n) {
        if (!(regexp.test(o.val()))) {
            o.addClass("ui-state-error");
            updateTips(n);
            return false;
        } else {
            return true;
        }
    }

    function addUser() {
        var valid = true;
        allFields.removeClass("ui-state-error");

        valid = valid && checkLength(email, "email", 6, 80);
        valid = valid && checkLength(password, "password", 5, 16);

        valid = valid && checkRegexp(email, emailRegex, "eg. ui@jquery.com");
        valid = valid && checkRegexp(password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9");

        if (valid) {
            user.push($('#email').val())
            pswd.push(md5($('#password').val()))
            dialog.dialog("close");
        }
        return valid;
    }

    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Create an account": addUser,
            Cancel: function() {
                dialog.dialog("close");
            }
        },
        close: function() {
            form[0].reset();
            allFields.removeClass("ui-state-error");
        }
    });

    form = dialog.find("form").on("submit", function(event) {
        event.preventDefault();
        addUser();
    });

    $("#create_account").button().on("click", function() {
        dialog.dialog("open");
    });
});

$(function() {
    $("#dialog1").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
    });
});

$(function() {
    $("#dialog2").dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
    });
});

// -----------------------------------------menu-------------------------------------------------