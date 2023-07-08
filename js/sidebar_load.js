      // Get the iframe element
      const iframe = document.querySelector('.sidebar');

      // Wait for the iframe to load
      iframe.addEventListener('load', () => {
        // Get the document inside the iframe
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

        // Get all the <a> elements inside the iframe
        const links = iframeDoc.querySelectorAll('a');

        // Change the style of a elements
        links.forEach(link => {
          link.style.color = '#82857b';
          link.style.textDecoration = 'none';
          link.style.fontSize = '25px';
          link.style.fontFamily = 'Arial';
          link.style.fontWeight = 'bold';
          link.style.padding = '10px';
          link.style.margin = '10px';
          link.style.display = 'block';
          link.style.textAlign = 'center';
        });


        const links_img = iframeDoc.querySelectorAll('img');
        links_img.forEach(link => {
          link.style.width = '40px';
        });
      });