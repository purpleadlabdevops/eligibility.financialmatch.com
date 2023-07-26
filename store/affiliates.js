export const state = () => ({
  phone: '17739156054',

  affiliates: [
    {
      sub1: 50,
      id: 'JS3f799edb60bf4a1b9bae92dcb4cb66b7'
    },
    {
      sub1: 13,
      id: 'JSd8859e71cc0f41d382f1b8ae6fb3829e'
    },
    {
      sub1: 151,
      id: 'JS890943985ce24c68a6764a0c96163584'
    },
    {
      sub1: 88,
      id: 'JS3c6af0e6478d420980957f9bc2d5c94f'
    },
    {
      sub1: 176,
      id: 'JS3f799edb60bf4a1b9bae92dcb4cb66b7'
    },
    {
      sub1: 214,
      id: 'JS2a8e411a790649039a50da6c78be8e17'
    }
  ]
})

export const mutations = {
  setPhone(state, phone) {
    state.phone = phone
  }
}

export const actions = {
  getSub({commit, state}, params) {
    const aff = state.affiliates.find(aff => aff.sub1 == params.sub1)
    const getPhone = () => {
      if( localStorage[`ringbaNumber_${aff.id}`] ){
        const obj = JSON.parse(localStorage[`ringbaNumber_${aff.id}`])
        commit('setPhone', obj.displayNumber)
      } else {
        setTimeout(() => getPhone(), 500)
      }
    }

    // run get phone script
    getPhone()

    // run tiktok rita script
    if(params.sub1 == 50){
      !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++
      )ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
      ttq.load('CAOUI33C77U6V5FA526G');
      ttq.page();
      }(window, document, 'ttq');
    }

    // run ringba script
    let e = window, d = document, _sc = d.getElementsByTagName('script'), _s = _sc[_sc.length - 1];
    e._rgba = e._rgba || { q: [] }; e._rgba.q.push({ tag: aff.id, script: _s });
    if (!(e._rgba.loading = !!e._rgba.loading)) {
      let sc = d.createElement('script'); sc.type = 'text/javascript'; sc.async = true;
      sc.src = '//js.callcdn.com/js_v3/min/ringba.com.js';
      let s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(sc, s);
      e._rgba.loading = true;
    }
  }
}

export const getters = {
  affiliates: (state) => state.affiliates,
  phone: (state) => state.phone
}
