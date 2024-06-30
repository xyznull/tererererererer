
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.e765a993b5d61c337899.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5835.latest.en.6d90f9ef17e5a7215238.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/3569.latest.en.9864dca70239bbd6697a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.en.d3bc65d7a91c6d71a13d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.85d36fed793156ba9b80.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.en.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6846.latest.en.52b14d870951c1a5a741.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.en.8ff27283522475e94436.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.en.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8933.latest.en.fbecd6fcb2d3a7dec43b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9962.latest.en.890ab8031075217c150c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5137.latest.en.4cf74cdc91d53d11c8f6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2594.latest.en.80dc15d80fb3eb83ddf0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5449.latest.en.b20b76a18fc60dcdaa46.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.0959ba11051eee0b58b2.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/5835.latest.en.3975c63f818b50435dd4.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.19558d19ece777c39c33.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.8039276cabb7faecfb04.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/chivo/chivo_n4.bf4dc1c0e4649d2f5a28281870307415c2a9c652.woff2?h1=c3RvcmUudmFudGFjaGVhdHMudG8&hmac=5fecaac3c6e5264ce009de22a39cad38640d7263e67743d2277b2672b56d28c3","https://fonts.shopifycdn.com/chivo/chivo_n7.d83b4aaa520af8b24ea0f1eb81a6d2d8b1a2ad49.woff2?h1=c3RvcmUudmFudGFjaGVhdHMudG8&hmac=276d7f4af1b7fb69ef267e0a2f66f14ddb5729397bfc46dbc723af276d3aa093","https://fonts.shopifycdn.com/bauer_bodoni/bauerbodoni_n4.8461148e5de43869667fbe64194eb80450bb3636.woff2?h1=c3RvcmUudmFudGFjaGVhdHMudG8&hmac=f3a2a71de46c95c349b9cc1b1e85bbea4e1341e6d4308c6eb98894d2c4095ff4","https://fonts.shopifycdn.com/bauer_bodoni/bauerbodoni_n7.6ba4277576da62f25b86b1485f3bf74f24b35351.woff2?h1=c3RvcmUudmFudGFjaGVhdHMudG8&hmac=5c627d8922a7717777ac20eb7e7cc95f1729a00b9dba33eadc0b58a6a8d12004"];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  