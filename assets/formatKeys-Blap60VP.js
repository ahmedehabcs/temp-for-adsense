function c(e){return`-----BEGIN PUBLIC KEY-----
${e.replace(/-----BEGIN ?PUBLIC KEY-----/g,"").replace(/-----END ?PUBLIC KEY-----/g,"").replace(/\s+/g,"").match(/.{1,64}/g)?.join(`
`)||""}
-----END PUBLIC KEY-----`}function a(e){return`-----BEGIN PRIVATE KEY-----
${e.replace(/-----BEGIN ?PRIVATE KEY-----/g,"").replace(/-----END ?PRIVATE KEY-----/g,"").replace(/\s+/g,"").match(/.{1,64}/g)?.join(`
`)||""}
-----END PRIVATE KEY-----`}export{a,c as f};
