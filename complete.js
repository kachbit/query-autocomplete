async function complete(query) {
    const url = `https://www.google.com/complete/search?client=chrome-omni&gs_ri=chrome-ext-ansg&xssi=t&q=${encodeURIComponent(query)}&oit=4&cp=6&pgcl=7&gs_rn=42&psi=UxvG8Sz4G7faBHFu&sugkey=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw`;
    try {
        const response = await fetch(url);
        var result = await response.text();
        result = JSON.parse(result.replace(`)]}'`,""))
        return result[1];
    } catch (error) {
        console.error(error);
        throw error;
    }
}
