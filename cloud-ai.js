// cloud-ai.js - Cloud AI Collective (v1)

export async function syncToCloud(ocrText) {
  try {
    const payload = {
      text: ocrText,
      deviceId: getDeviceId(),
      timestamp: new Date().toISOString()
    };

    const res = await fetch('https://api.cloud-ai-linebet.net/sync', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const json = await res.json();
    return json;
  } catch (err) {
    console.warn("⛔ فشل الاتصال بالسيرفر السحابي:", err.message);
    return { status: "offline", suggestion: "تحقق من الاتصال بالإنترنت." };
  }
}

function getDeviceId() {
  // معرف مجهول للجهاز لحماية الخصوصية
  let id = localStorage.getItem('cloud_device_id');
  if (!id) {
    id = 'device-' + Math.random().toString(36).substring(2, 10);
    localStorage.setItem('cloud_device_id', id);
  }
  return id;
}
