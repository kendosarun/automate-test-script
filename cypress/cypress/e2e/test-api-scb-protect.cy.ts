describe('Test API web "SCB Protect" ', () => {

    const basePath = 'https://www.scbprotect.co.th'

    it('Test Get API Endpoint homepage SCBProtect', () => {

        cy.visit(`${basePath}`);

        cy.request('GET', `${basePath}/api/v1/headermenu`).then((response) => {

            expect(response.status).to.equal(200);
            expect(response.body).to.deep.equal([
                {
                    "_id": "62a31dd185eaa9455c8d76de",
                    "name": "ผลิตภัณฑ์ประกัน",
                    "menuOrder": 0,
                    "bannerUrl": "https://online.scbprotect.co.th/motor/premium-cal?class=type-1&type=1&premiumMax=47500",
                    "bannerImageUrl": "https://sit-cdn.scbprotect.io/banner-menu_motor.png",
                    "hasData": true,
                    "menus": [
                        {
                            "_id": "7aef44ba-932f-4e7f-80a2-c81ec892e0db",
                            "name": "โปรโมชั่น",
                            "url": "https://www.scbprotect.co.th/promotions",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_01.webp"
                        },
                        {
                            "_id": "a579719f-1328-4d5b-b753-e629ae7bfb12",
                            "name": "ประกันรถยนต์",
                            "url": "https://www.scbprotect.co.th/products?tag_ins=ประกันรถยนต์",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_02.webp"
                        },
                        {
                            "_id": "a00b81d2-e532-44f2-82c8-7734c893a014",
                            "name": "ประกันอุบัติเหตุ",
                            "url": "https://www.scbprotect.co.th/products?tag_ins=ประกันอุบัติเหตุ",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_03.webp"
                        },
                        {
                            "_id": "7032aabe-d5bb-4937-936c-422a682dc037",
                            "name": "ประกันสุขภาพ",
                            "url": "https://www.scbprotect.co.th/products?tag_ins=ประกันสุขภาพ",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_04.webp"
                        },
                        {
                            "_id": "15f58a0e-13c8-421c-9102-aec5b08038ef",
                            "name": "ประกันโรคร้ายแรง",
                            "url": "https://www.scbprotect.co.th/products?tag_ins=ประกันโรคร้ายแรง",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_05.webp"
                        },
                        {
                            "_id": "d50d4c52-d925-4c71-8feb-dbc053eae3ba",
                            "name": "ประกันชีวิต",
                            "url": "https://www.scbprotect.co.th/products?tag_ins=ประกันคุ้มครองชีวิต",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_06.webp"
                        },
                        {
                            "_id": "c6fc297e-3621-4368-bc0c-5df0df78615d",
                            "name": "ประกันออมทรัพย์",
                            "url": "https://www.scbprotect.co.th/products?tag_ins=ประกันสะสมทรัพย์",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_07.webp"
                        },
                        {
                            "_id": "06073716-d845-4b9f-89bf-4b26d301e659",
                            "name": "ประกันการเดินทาง",
                            "url": "https://www.scbprotect.co.th/products?tag_ins=ประกันการเดินทาง",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_08.webp"
                        },
                        {
                            "_id": "fea75869-8529-4fc3-9dbe-3804b2174c3e",
                            "name": "ประกันบ้านและทรัพย์สิน",
                            "url": "https://www.scbprotect.co.th/products?tag_ins=ประกันบ้านและทรัพย์สิน",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_021.webp"
                        },
                        {
                            "_id": "4ef2a443-9f12-4d7d-a44b-fce1040805ea",
                            "name": "ประกันทั้งหมด",
                            "url": "https://www.scbprotect.co.th/products?tag_ins=",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_010.webp"
                        }
                    ]
                },
                {
                    "_id": "62a31dd185eaa9455c8d76dc",
                    "name": "ให้เราช่วยคุณ",
                    "menuOrder": 1,
                    "bannerUrl": "",
                    "bannerImageUrl": "",
                    "menus": [
                        {
                            "_id": "7ffcb43b-d43f-4a2b-b666-4bf9c1abd9ac",
                            "name": "คำถามที่พบบ่อย",
                            "url": "https://online.scbprotect.co.th/faq",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_011.webp"
                        },
                        {
                            "_id": "c54812f5-8ec9-44ac-aeaf-edb08f5474ad",
                            "name": "ติดต่อเรา",
                            "url": "https://online.scbprotect.co.th/our-service",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_012.webp"
                        }
                    ],
                    "hasData": true
                },
                {
                    "_id": "62a31dd185eaa9455c8d76db",
                    "name": "เกี่ยวกับเรา",
                    "menuOrder": 2,
                    "bannerUrl": "",
                    "bannerImageUrl": "",
                    "menus": [
                        {
                            "_id": "80812b4e-105d-4914-aea9-e4b63ba6baed",
                            "name": "เกี่ยวกับ SCB Protect",
                            "url": "https://www.scbprotect.co.th/about",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_013.webp"
                        },
                        {
                            "_id": "da9aa4d5-d27e-4dc8-9c4b-e589ee2fb1b2",
                            "name": "ข่าวสาร & กิจกรรม",
                            "url": "https://www.scbprotect.co.th/news",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_014.webp"
                        },
                        {
                            "_id": "a50fb7eb-b968-486e-951b-8b0b4b91ddec",
                            "name": "บทความ",
                            "url": "https://www.scbprotect.co.th/articles",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_015.webp"
                        }
                    ],
                    "hasData": true
                },
                {
                    "_id": "62a31dd185eaa9455c8d76dd",
                    "name": "สมัครงาน",
                    "menuOrder": 3,
                    "bannerUrl": "",
                    "bannerImageUrl": "",
                    "menus": [
                        {
                            "_id": "4063e645-4444-4d0f-8e82-86ae9dc2ac88",
                            "name": "ตำแหน่งทั้งหมด",
                            "url": "https://www.scbprotect.co.th/recruits",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_016.webp"
                        },
                        {
                            "_id": "1ae07711-e9cb-4911-87f7-0001d9d7e56d",
                            "name": "สมัครที่ปรึกษาด้านความคุ้มครอง",
                            "url": "https://salesmanpower.scbprotect.co.th/#/pc",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_017.webp"
                        },
                        {
                            "_id": "b8dd5711-03f2-42aa-8aee-da7a87abf0ab",
                            "name": "ผู้บริหารทีมขาย",
                            "url": "https://salesmanpower.scbprotect.co.th/#/sm",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_018.webp"
                        },
                        {
                            "_id": "73147ef4-57b6-4b91-a1ee-3a7138988e31",
                            "name": "พนักงานขายผ่านโทรศัพท์",
                            "url": "https://salesmanpower.scbprotect.co.th/#/telesales",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_019.webp"
                        },
                        {
                            "_id": "8ec0d0ef-13a6-48b7-b66a-07a2bd924d5e",
                            "name": "นายหน้าประกันในสังกัด SCB Protect",
                            "url": "https://salesmanpower.scbprotect.co.th/#/sab",
                            "iconUrl": "https://cdn.scbprotect.co.th/Menu_ico_020.webp"
                        }
                    ],
                    "hasData": true
                }
            ]);
        });

    });
});