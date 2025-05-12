const bundles = document.querySelectorAll(".bundle-option");

bundles.forEach(bundle => {
    bundle.addEventListener("click", () => {
        bundles.forEach(b => {
            b.querySelector("input").checked = false;
            const content = b.querySelector(".option-content");
            if (content) content.style.display = "none";
        });

        bundle.querySelector("input").checked = true;
        const content = bundle.querySelector(".option-content");
        if (content) content.style.display = "block";
    });
});
