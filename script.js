let btn = document.querySelector("button");
      let url = "https://icanhazdadjoke.com/";

      btn.addEventListener("click", async () => {
        let p = document.querySelector("#result");
        p.innerText = "Loading...";
        let joke = await getJokes();
        p.innerText = joke;
      });

      async function getJokes() {
        try {
          let config = { headers: { Accept: "application/json" } };
          let res = await axios.get(url, config);
          return res.data.joke;
        } catch (err) {
          console.log("error : ", err);
          return "No Joke Found :(";
        }
      }