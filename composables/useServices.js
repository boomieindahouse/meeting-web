export function useServices() {
  const services = [
    {
      icon: 'mdi:web',
      title: 'Web Design',
      description:
        'ออกแบบเว็บไซต์ ดีไซน์เว็บ ทำเว็บ Web Development ด้วยมาตรฐานสากล รองรับการแสดงทั้งบนมือถือ และ Desktop พร้อมให้บริการทั้งในรูปแบบเว็บส่วนตัว (Web Blog) เว็บร้านค้า SME เว็บองค์กร บริษัท(Corporate) ห้างร้าน รวมไปถึง E-Commerce',
    },
    {
      icon: 'mdi:brush', 
      title: 'Graphic Design',
      description:
        'บริการกราฟิคดีไซน์ รับออกแบบโลโก้ แบนเนอร์ โปสเตอร์ ปกหนังสือ สื่อสิ่งพิมพ์ต่างๆ รวมไปถึงงานออกแบบออนไลน์ หน้าปก Social Media ตลอดจนการวาง Branding Corporate Identity ให้กับธุรกิจของคุณ',
    },
    {
      icon: 'mdi:network',
      title: 'Network Service',
      description:
        'รับดูแลและออกแบบระบบเน็ตเวิร์คให้คำปรึกษาการเชื่อมต่อระบบเน็ตเวิร์ค ให้ใช้งานได้เสถียร และครอบคลุมทั้งสำนักงานตลอดจนการเดินสายแลน เดินระบบกล้องวงจรปิด โดยบุคลากรที่เชี่ยวชาญด้านเทคนิคแก้ไขปัญหา ได้อย่างตรงจุด รับประกันงานติดตั้ง 1 ปีเต็ม',
    },
  ];

  return {
    services,
  };
}
