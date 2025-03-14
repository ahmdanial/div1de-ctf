import './index.css'; // You'll need to create this CSS file

function App() {

  return (
    <div className="App">
      <div className="container" >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="logo.png" alt="Website Logo" className="logo" />
        </div>
        <div style={{textAlign: 'center'}}>
          <h1>Welcome to DIV1DE CTF!</h1>
          <p>If you're reading this, your browser has successfully received the flag.</p>
          <p>Here's a bookmarklet for you to try:</p>
        </div>
        <pre>
          <code>
            {`javascript:(function() {
      var encryptedFlag = "ÇÕßÕÈïÜÞâÂ¤ÄçßÂÎÛèÖÙØÂÏÑÝÏ§ÔÊæ";
      var key = "clicqctf";
      var decryptedFlag = "";
      for (var i = 0; i < encryptedFlag.length; i++) {
          decryptedFlag += String.fromCharCode((encryptedFlag.charCodeAt(i) - key.charCodeAt(i % key.length) + 256) % 256);
      }
      alert(decryptedFlag);
  })();`}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default App;
