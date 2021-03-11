    $(document).ready(function() {
        $("tr").click(function() {
            icd = $("#icd_name", this).text();
            icd_txt = $.trim(icd);
            $("#icd_input").val(icd_txt);
            console.log(icd);
            console.log(icd_txt);
            $("#icd_container").modal("hide");
        });
    });