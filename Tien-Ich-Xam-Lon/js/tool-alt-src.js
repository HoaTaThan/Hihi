function loadToolAltSrc() {
  const html = `
    <h2>Tool Chuyển ALT + SRC</h2>
    <div style="display: flex; gap: 20px;">
      <div style="flex: 1;">
        <label>ALT</label>
        <textarea id="altInput" rows="15" placeholder="hình nền hoa" style="width: 100%;"></textarea>
      </div>
      <div style="flex: 1;">
        <label>File name</label>
        <textarea id="srcInput" rows="15" placeholder="hinh-nen-hoa.jpg" style="width: 100%;"></textarea>
      </div>
    </div>
    <br>
    <label>Thư mục con (subfolder, tuỳ chọn):</label>
    <input id="subfolderInput" placeholder="ví dụ: hinh-nen-hoa" style="width: 50%;" />
    <br><br>
    <button class="tool-btn" onclick="generateAltSrc()">Chuyển đổi</button>
    <button class="tool-btn" onclick="copyOutputAltSrc()">Copy kết quả</button>
    <h3>Kết quả</h3>
    <textarea id="output" rows="10" style="width: 100%;" readonly></textarea>
  `;

  document.getElementById("content").innerHTML = html;
}

function generateAltSrc() {
  const altLines = document.getElementById('altInput').value.trim().split('\n');
  const srcLines = document.getElementById('srcInput').value.trim().split('\n');
  const subfolder = document.getElementById('subfolderInput').value.trim();

  let result = '';

  for (let i = 0; i < srcLines.length; i++) {
    const alt = altLines[i] ? altLines[i].trim() : '';
    const filename = srcLines[i] ? srcLines[i].trim() : '';

    let src = "/upload_images/images/";
    if (subfolder) {
      src += subfolder + "/";
    }
    src += filename;

    if (filename) {
      result += `<p style="text-align:center"><img alt="${alt}" src="${src}" style="height:457px; width:800px" /></p>\n`;
    }
  }

  document.getElementById('output').value = result;
}

function copyOutputAltSrc() {
  const output = document.getElementById('output');
  output.select();
  document.execCommand('copy');
  alert('Đã copy kết quả vào clipboard!');
}