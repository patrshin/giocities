      // Get the iframe element
      const iframe = document.querySelector('.sidebar');

      // Wait for the iframe to load
      iframe.addEventListener('load', () => {
        // Get the document inside the iframe
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        // Get all the <p> elements inside the iframe with class "social-media"
        const big_item = iframeDoc.querySelectorAll('p');
        // Change the style of a elements
        big_item.forEach(link => {
          link.style.color = '#82857b';
          link.style.textDecoration = 'none';
          link.style.fontSize = '25px';
          link.style.fontFamily = 'Arial';
          link.style.fontWeight = 'bold';
          link.style.padding = '0';
          link.style.margin = '0';
          link.style.marginLeft = '10px';
          link.style.display = 'block';
        });

        const ul = iframeDoc.querySelectorAll('ul');
        ul.forEach(link => {
          link.style.margin = '0px';
          link.style.padding = '0px';
        });
        // Get all the <a> elements inside the iframe with class "social-media"
        const list_item = iframeDoc.querySelectorAll('li');
        // Change the style of a elements
        list_item.forEach(link => {
          link.style.color = '#82857b';
          link.style.textDecoration = 'none';
          link.style.fontSize = '15px';
          link.style.fontFamily = 'Arial';
          link.style.fontWeight = 'bold';
          link.style.margin = '10px';
          link.style.display = 'block';
          link.style.textAlign = 'center';
        });


        // Get all the <img> elements inside the iframe with class "social-media"
        const links_img = iframeDoc.querySelectorAll('.social-media img');
        links_img.forEach(link => {
          link.style.width = '40px';
        });


        const links_sakura_wall = iframeDoc.querySelectorAll('.sakura-wall div');
        links_sakura_wall.forEach(link => {
          link.style.width = '100px';
        });
      });