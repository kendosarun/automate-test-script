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

        cy.request('GET', `${basePath}/api/v1/motor/carBrand`).then((response) => {

            expect(response.status).to.equal(200);
            expect(response.body).to.deep.equal({
                "data": {
                    "item": {
                        "name": "Brand",
                        "children": [
                            {
                                "id": "648E8F54C8C7445A84E1776D801BD3CD",
                                "name": "Toyota",
                                "Name": {
                                    "value": "Toyota",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "C8BD8DFA378C4883AF2F83E09CFE93AA",
                                "name": "Honda",
                                "Name": {
                                    "value": "Honda",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "B33FF758A5974074ACD4CABEB07686DD",
                                "name": "Mazda",
                                "Name": {
                                    "value": "Mazda",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "4BB59585817B43E6B0DABABA73D08C5A",
                                "name": "Nissan",
                                "Name": {
                                    "value": "Nissan",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "9A08543C5CB74D229042E64E75C6F6A1",
                                "name": "Isuzu",
                                "Name": {
                                    "value": "ISUZU",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "2C454FEC6118487FBB3346135F5013E1",
                                "name": "Abarth",
                                "Name": {
                                    "value": "Abarth",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "BEB3EBA69D65435AA587AB7ACBF93B02",
                                "name": "AC",
                                "Name": {
                                    "value": "AC",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "14F55BD79D7942D89FDFB8B06526C547",
                                "name": "Acura",
                                "Name": {
                                    "value": "Acura",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "91AF06109F684CB8AF4268BBFFDE2142",
                                "name": "Alfa Romeo",
                                "Name": {
                                    "value": "Alfa Romeo",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "FDCE29C1A63041BDA4A0D3CFC435782B",
                                "name": "Aston Martin",
                                "Name": {
                                    "value": "Aston Martin",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "6EF2EA20288C4D6BBC001EB592835B4C",
                                "name": "Audi",
                                "Name": {
                                    "value": "Audi",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "173F91FAC8DF472C80209C969DFE52AD",
                                "name": "Austin",
                                "Name": {
                                    "value": "Austin",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "318337146E6E4E1B95B6D78106AFD20D",
                                "name": "Bentley",
                                "Name": {
                                    "value": "Bentley",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "E1C14A587E7849AAA17ECEA41E5F67FC",
                                "name": "BMW",
                                "Name": {
                                    "value": "BMW",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "8D747DC319184447ADE3C427AEBA36EC",
                                "name": "Brabus",
                                "Name": {
                                    "value": "Brabus",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "1A0FC4E6989B4820A7F81ACF62A759A6",
                                "name": "Cadillac",
                                "Name": {
                                    "value": "Cadillac",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "9616833FCD7B4ADEBE3B2B4407901099",
                                "name": "Changan",
                                "Name": {
                                    "value": "Changan",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "1DE8EAB3FF524EA4A20F7E2B47DEAD71",
                                "name": "Chery",
                                "Name": {
                                    "value": "Chery",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "B51C8DD9C43049E3970B5680D3C46794",
                                "name": "Chevrolet",
                                "Name": {
                                    "value": "Chevrolet",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "C08E8E733DCB4B8AA4CC7A79CDEC7E99",
                                "name": "Chrysler",
                                "Name": {
                                    "value": "Chrysler",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "6B80D149C8C748F1B92EB46864F2E10C",
                                "name": "Citroen",
                                "Name": {
                                    "value": "Citroen",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "7C8A3B57856E474A921BEC0DA92CC73C",
                                "name": "Daewoo",
                                "Name": {
                                    "value": "Daewoo",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "B249C431E0D34BD283CC1A78A55FA466",
                                "name": "Daihatsu",
                                "Name": {
                                    "value": "Daihatsu",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "43E2F46E6125466EBF98F539C2472BF1",
                                "name": "Daimler",
                                "Name": {
                                    "value": "Daimler",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "57CA5FA41E284FA7874DC56A7C10411A",
                                "name": "Datsun",
                                "Name": {
                                    "value": "Datsun",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "D60BBCB3CD404EF2BE659D3D181CF846",
                                "name": "Dodge",
                                "Name": {
                                    "value": "Dodge",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "8AD42733FCAF438098DC524E4F436082",
                                "name": "Dutsun",
                                "Name": {
                                    "value": "Dutsun",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "B85A905C600242A19ACD58DF10B559F7",
                                "name": "Ferrari",
                                "Name": {
                                    "value": "Ferrari",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "972B780E351F44BB9538A2C1FC233BA9",
                                "name": "Fiat",
                                "Name": {
                                    "value": "Fiat",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "5CB7DB7969C84CFB805436D8630DB566",
                                "name": "Ford",
                                "Name": {
                                    "value": "Ford",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "77982F72E131419BA9A9F5844C0E05B5",
                                "name": "GMC",
                                "Name": {
                                    "value": "GMC",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "716C6007A29B4E7790708EEB6DCA45C1",
                                "name": "Haval",
                                "Name": {
                                    "value": "Haval",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "E11B9F7930FC41EAB8DA73F62C447F88",
                                "name": "Hillman",
                                "Name": {
                                    "value": "Hillman",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "DC6986DA3CB74926BE6EFA417FCABDF8",
                                "name": "Holden",
                                "Name": {
                                    "value": "Holden",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "BBD6BE884EE84D0BB5D42EEAEB5562E1",
                                "name": "Hummer",
                                "Name": {
                                    "value": "Hummer",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "F4A702EDD5574A4A91E5ED8553C8867E",
                                "name": "Hyundai",
                                "Name": {
                                    "value": "Hyundai",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "3BFEA1D6A000436C81E33533711B7322",
                                "name": "Infiniti",
                                "Name": {
                                    "value": "Infiniti",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "CAFD1F4203A0486595A2CC2E8D024C17",
                                "name": "Intenational",
                                "Name": {
                                    "value": "Intenational",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "21B9242722774865B93B64BAFA4743DA",
                                "name": "Jaguar",
                                "Name": {
                                    "value": "Jaguar",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "072531A7ACE647B5AED0A737E28ADD2A",
                                "name": "Jeep",
                                "Name": {
                                    "value": "Jeep",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "69C14E3E7C5545DFA8969466BB33B77E",
                                "name": "KIA",
                                "Name": {
                                    "value": "KIA",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "64EF86CAC8884D99A79EE698CD16BD05",
                                "name": "KTM",
                                "Name": {
                                    "value": "KTM",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "2F1512A526B04D70A79BE5AFEE7AC3F7",
                                "name": "Lamborghini",
                                "Name": {
                                    "value": "Lamborghini",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "90F50390E00746D9BB201B6B86F5E6F1",
                                "name": "Lancia",
                                "Name": {
                                    "value": "Lancia",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "33F9A62138394B4BBFA55D85766F9957",
                                "name": "Land Rover",
                                "Name": {
                                    "value": "Land Rover",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "77770E1E8ED64F95B339914CD9DABBA4",
                                "name": "Lexus",
                                "Name": {
                                    "value": "Lexus",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "2D0CED9DED6A475D9B55AE2D59158D19",
                                "name": "Lincoln",
                                "Name": {
                                    "value": "Lincoln",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "C7CB4C0AF6854D7CB48D4EC99DF1BD13",
                                "name": "Lotus",
                                "Name": {
                                    "value": "Lotus",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "7CD83392B1F246A886E0C83BBC283FB8",
                                "name": "Maserati",
                                "Name": {
                                    "value": "Maserati",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "DA0AA25FE9EE4B5BB46BEA83A3635B81",
                                "name": "Mclaren",
                                "Name": {
                                    "value": "Mclaren",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "C1D80B3C40644ED399F7EA6CCF41AF02",
                                "name": "Mercedes-Benz",
                                "Name": {
                                    "value": "Mercedes-Benz",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "BA0D77D85080429AB68497960D707906",
                                "name": "MG",
                                "Name": {
                                    "value": "MG",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "80CF7715AB214E6F8B446F33654F666C",
                                "name": "Mini",
                                "Name": {
                                    "value": "Mini",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "C64E64303B6B4933A9D977CCCB10BF46",
                                "name": "Mitsubishi",
                                "Name": {
                                    "value": "Mitsubishi",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "4EAB8FEA6AFA4350BE9209C2A4597FA2",
                                "name": "Mitsuoka",
                                "Name": {
                                    "value": "Mitsuoka",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "4BC7E8BBF6674AE4BB2489DE7CF5E258",
                                "name": "Morgan",
                                "Name": {
                                    "value": "Morgan",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "417F757A8359459890893E17D0A13CAC",
                                "name": "Opel",
                                "Name": {
                                    "value": "Opel",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "D900996AC39741DE8FC97008E5444084",
                                "name": "ORA",
                                "Name": {
                                    "value": "ORA",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "14A7E6D0C9C04D96B624A91A2A9FC0F0",
                                "name": "Perodua",
                                "Name": {
                                    "value": "Perodua",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "E1950465819B4B7197FEA0CAA5741284",
                                "name": "Peugeot",
                                "Name": {
                                    "value": "Peugeot",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "864C2E5528CB4839B726C70D7621E676",
                                "name": "Porsche",
                                "Name": {
                                    "value": "Porsche",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "3C19519AB1CF47458A57B5517BFB7041",
                                "name": "Proton",
                                "Name": {
                                    "value": "Proton",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "1FDE53954EAE4690997FC5C103702991",
                                "name": "Renault",
                                "Name": {
                                    "value": "Renault",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "600BD9C287B94E5799BB8084FA5734E6",
                                "name": "Rolls Royce",
                                "Name": {
                                    "value": "Rolls Royce",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "AF754F49A8204A739DE22705D662DFD6",
                                "name": "Rover",
                                "Name": {
                                    "value": "Rover",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "4877954E4ABD4A448BF24E7B6E728958",
                                "name": "Ruf",
                                "Name": {
                                    "value": "Ruf",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "55464687925E49FEB00F6298ADED5F22",
                                "name": "Saab",
                                "Name": {
                                    "value": "Saab",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "0F0F74B7ACC34913B04CEF07A816C233",
                                "name": "Seat",
                                "Name": {
                                    "value": "Seat",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "B8B0F235CCAB4E4098E4A34C9A7BB883",
                                "name": "Skoda",
                                "Name": {
                                    "value": "Skoda",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "41F8762E499C40ACADEDBB0FE342EE9F",
                                "name": "Smart",
                                "Name": {
                                    "value": "Smart",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "BFEEC962ED6B49D39CE8BE86674018EE",
                                "name": "Ssangyong",
                                "Name": {
                                    "value": "Ssangyong",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "6C35593B8C6F4A95915BD8C43C793067",
                                "name": "Subaru",
                                "Name": {
                                    "value": "Subaru",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "8A01C16211874DC593CDED2E37967029",
                                "name": "Suzuki",
                                "Name": {
                                    "value": "Suzuki",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "57159BE9C1E04CF688100D2E6D23ED53",
                                "name": "Tata",
                                "Name": {
                                    "value": "Tata",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "AD4901BC9ECA4A3695EDA416E37871C2",
                                "name": "Thairung",
                                "Name": {
                                    "value": "Thairung",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "F3D4A1389168494CB5C28618FF774080",
                                "name": "Triumph",
                                "Name": {
                                    "value": "Triumph",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "710DD6DF857E48698AEACF83917C2037",
                                "name": "Volkswagen",
                                "Name": {
                                    "value": "Volkswagen",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "92C940301135423BB228BF1035576CD5",
                                "name": "Volvo",
                                "Name": {
                                    "value": "Volvo",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            },
                            {
                                "id": "25645BFA97C64845A0B542D0F3A4DC69",
                                "name": "Wuling",
                                "Name": {
                                    "value": "Wuling",
                                    "__typename": "TextField"
                                },
                                "OrderNumber": {
                                    "value": "",
                                    "__typename": "IntegerField"
                                },
                                "__typename": "UnknownItem"
                            }
                        ],
                        "__typename": "UnknownItem"
                    }
                }
            });
        });

    });
});