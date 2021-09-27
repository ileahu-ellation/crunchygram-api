const posts = [
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1c3210e9d5a10b7a3ba3205d2c83e514.jpeg',
    name: "Chio's School Road",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6e5065403981315750fa9bd117365cb7.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e111417107694e9b0bdb34ab5e6fc32c.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/069901b849ac8a2edfa466ebfa884c6f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8a8b7aba9511be011aef14f38a0c1f40.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0a1ea978f1279da4a07074420a77b789.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4030629460c9412d1154da7ad37aa3df.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/908263a2588b24bd827345eb0e57b7e8.jpg',
    name: "Wise Man's Grandchild",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3fc100062a19fb042b4c37f71de036ca.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d8b20deeae8aa5deb963dba0c941a5bf.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/eb19add45d51477531d2912d18c7e67d.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/18fb3c24e104c422c3ac70e6c983b002.jpg',
    name: 'The 8th son? Are you kidding me?',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3b2ff695c036678289c861bee87f685e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/255d95d5569e1a1f7896dd1ec644be06.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5113c68f804c011158c81464998830d4.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5943c491334e4696f205fa6c819517f7.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b480b0c71b50dd1490bb03b14ac70ba3.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3841b3cc36e66dc888c2a919e15bceb2.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7000e3f1e4bef88e8380ba1994268ff7.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/908263a2588b24bd827345eb0e57b7e8.jpg',
    name: "Wise Man's Grandchild",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/fdac5548e594bbac474e9a74ddca5a84.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/37951b36bdfa395fa4f9dcd206f95053.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/50b36e168908dc5213c75932ebd648f4.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/bcd7234a18a320e8002366d2c483af0e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c79c56d8a0e1e2bc64eb7945343c3baf.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9c5dd7f0e0b9596e939e21eb41844213.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/49bc8fbdc97c3292fab3f9d64581e941.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/908263a2588b24bd827345eb0e57b7e8.jpg',
    name: "Wise Man's Grandchild",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/396c4f7a533fc24ff5d80122571ab7c3.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf2355f234b3682284c39d998dcbc1c8.jpg',
    name: 'High School Prodigies Have It Easy Even In Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c7e12bea6adb01e35e961ee69411162f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0bf4795e9f38b906f8476cf040ec1c79.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/18fb3c24e104c422c3ac70e6c983b002.jpg',
    name: 'The 8th son? Are you kidding me?',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9e298c632e2aa125c7ced6c88a2095fe.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/19b0d52a602f16dda4c55f5136831252.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0c4ed5af80723188871f182bc5773952.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e7aa3a0dd876057f83dda287bcfa4977.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1c3210e9d5a10b7a3ba3205d2c83e514.jpeg',
    name: "Chio's School Road",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/571aaf6b79adbc40dc0746df4918fd55.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf2355f234b3682284c39d998dcbc1c8.jpg',
    name: 'High School Prodigies Have It Easy Even In Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f194954af01376af7efa0bf42af45c05.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ea1969a4c7053e83f3c524f1b78f6e77.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/de93327d8b83650ad37adea89ecfd0a5.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/17a76d03a10291c5d3548cda7a0fde77.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2be3bd2fac522b85af70394d14afe38c.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b199406edeebc19a7f4e4412d6e1dfcc.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b6abecc325e99df18476236b008b7ca1.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ce869db5c176b5857f6cd32af329f41e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d1abaf673f5468a3fd783255616f4707.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6236479c6a54081bd0f2fcdc302b1cae.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ebbd1ec1d5f3fcd9b268bdc62b904754.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1c3210e9d5a10b7a3ba3205d2c83e514.jpeg',
    name: "Chio's School Road",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b8ca1236b8f59bda7ea6ad0b77373e89.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7cd5fc1235f641294007b0b84765fd97.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/07e4b59b3818fb74d4897a736156b08a.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/be56741155491afe6f722771a395f802.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6bc5a290d16b8da7db8ea50d99b8f7bb.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/56fb585aaca7bdce948a175dc717abdb.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e795b22bccecb71e36152fc858083e07.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/18fb3c24e104c422c3ac70e6c983b002.jpg',
    name: 'The 8th son? Are you kidding me?',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6ff380f0ac41bda2e1fec34ac2389dce.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c5a4fd982c55ec190ed146262544631f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/39af8c5ea4f39e3870b74ee78dd2471c.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6369edad5c49d017efd508d26be35fc2.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a879fabf2da74e350fa841526b473ced.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/760982917fd0f3fc7d0cff95bb7b14ea.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b4f44bb205637adfddc10a41f6c90398.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/dca704817ab11dc38518982f4591a588.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/31e5ba2c3b2e9b47b57d11ca021e96c8.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/30317658143e7a45be534282721393c4.jpg',
    name: 'How Not to Summon a Demon Lord',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5eca325311a4226384026338fb6a1e55.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/fcbb46f63e30e077fbdf2a1245e114f5.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/350c8f1fddd535e04cfb4b29b4e3ab75.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8f919c779bc9145b1f8e6676df310406.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf2355f234b3682284c39d998dcbc1c8.jpg',
    name: 'High School Prodigies Have It Easy Even In Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cc19c685bfdd0b9b80468bfa3bdee0c7.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/712c7791d6e762f57ae5459e0ed948f5.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf2355f234b3682284c39d998dcbc1c8.jpg',
    name: 'High School Prodigies Have It Easy Even In Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/af5d6941542a81b6fad1c9ed929757dd.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/72b58d797eb3a62a75a0fb1e5d5b4576.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f0a948da54bd85354f08ccb57eaf2014.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d5c47a89920f415036d3269381caad21.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/53ed1f86bbc90ae002347d55ce259cd0.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/26eab4134e05cc20d452f317ba6fef60.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2512b8831bf6b78d157842cfc667927d.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/25110234e3be29d15b0ece1b187700ad.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/220fb12b27221cc389ea48d4e1a478fd.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d97fecb8aae09a4d425b1def86c23cb6.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2d3e5bb0ecd0d03cd674f5f7c009a7dc.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/89158a698894e941ab1b2b76bdd8acb1.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/92004cc0fa9f07bdce107ff0af762af4.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9c8627b71df02dcc7e5647fbb51ef667.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f09b7591f88554d0d9a202a22f0441a4.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf2355f234b3682284c39d998dcbc1c8.jpg',
    name: 'High School Prodigies Have It Easy Even In Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/46f6b5cc7ff34bfae2eeb8e6e54135b5.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c7bb1d658d152abd18e3067c636dc7a0.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c5c3cbb171bc883dcdc581c9c21bbb4e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/18fb3c24e104c422c3ac70e6c983b002.jpg',
    name: 'The 8th son? Are you kidding me?',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/be91ad9945715efd223087c2798c21da.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e44e803ce761d6d5c27fba04e9fb8ac7.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/af666f0f1d7dac4aea8fd7b548419e00.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpg',
    name: 'One-Punch Man',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cc035176d4594a16d00c9bfde8bba10e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b614ea00696260d61d7696574664ef6b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/602789ff0906c748b77f0d6f5cc0dd91.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f30887fcbc7fd381afafcc1b768e18b9.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b3562179fe3970a6356b6af399d68546.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8529de190f62229467c593704f670fc9.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8e29e2522e0d6fda478ae88f2ee84ff2.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/30317658143e7a45be534282721393c4.jpg',
    name: 'How Not to Summon a Demon Lord',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9cf4bd02f8e51ce81a1e6057d42619ef.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf2355f234b3682284c39d998dcbc1c8.jpg',
    name: 'High School Prodigies Have It Easy Even In Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6155486f8f4b79cce8798f6e3762bc54.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/71fcea4cc7b36bfe92d853473a6d6809.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2f0397483b6397ea7e7b340b55c2afbd.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2c081bad69a67a35b68ed32c89fb090f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/70b8523c0db0ff7ee8e350b5293f834a.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/dcafd7710118830a6185f44f9667fe0c.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/09379010a52b6c46c3e8fd0939974a07.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/38af0de505030d13126f6d93f87ac3c2.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7a432f52f7b42b9d7405e91d06495306.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/30317658143e7a45be534282721393c4.jpg',
    name: 'How Not to Summon a Demon Lord',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c05578d3e6e3c63ae2461f4a6b8fac24.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6a25940a8564d66ebcc1f5f75d9da9cb.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/bb8d5791791d39761965f0e539699d79.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b167b681aaca37a17861759e94d019d8.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cead3f1685a32f7d28fd539f6773831d.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/12c98f021e13a65ec9e68ffc508c21e2.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/14467ea40177fb7dd88aa0c067acc46b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e0ae548ed0fc96568a217e49d41dc480.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/18fb3c24e104c422c3ac70e6c983b002.jpg',
    name: 'The 8th son? Are you kidding me?',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8bf7bfdfefff34ff4600402a8e7ff956.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d178c066f3340c55c1f77f777f9082fd.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/941f10ee007bd7a2704d00dfb460c8fa.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3873f2dbcef91cf5919ec90176d4f761.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4e3df66c70a0de17a66540f4a3a5bf24.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/30317658143e7a45be534282721393c4.jpg',
    name: 'How Not to Summon a Demon Lord',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ae7a5bf36f02fa028ee65c57cdfb71d7.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c8c8f192648af697283ebb1d2ef2b238.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8cb2f65c6ac815f2abf4f6de609aea89.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/77f2a9a9c242aa29e7804ec1c2d474b9.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5e806832e7de9091cde24cc4b82920e6.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8587a0b48de7a0924485c0b7cb2bfca9.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/04988658cbf9a4edb35741d0227752fd.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1c3210e9d5a10b7a3ba3205d2c83e514.jpeg',
    name: "Chio's School Road",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/858ff8a012edca15ae4408fb30bf4dd7.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a2b837d00935be92b652e036d514c8bb.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/78cfd99157a9b950c17e9d200cc3337e.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/18fb3c24e104c422c3ac70e6c983b002.jpg',
    name: 'The 8th son? Are you kidding me?',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/51d2f8c8854d60b79af150bfd2ff0cfc.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/91e17edd483923b330428ac5de39796d.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ea26cfb9eb4705aceb77f4da0795747.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e828f02a375e351af1856183c3aa4b7f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/04707d3f4f90fe8d818678630af43890.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/953c5920bb29decf65d0a722c7601a31.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3bf0fb749324478cc1c86080cd02e466.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/30317658143e7a45be534282721393c4.jpg',
    name: 'How Not to Summon a Demon Lord',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6210d0796d960659344032358391d5ae.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e584cefced22f04d6fafc8ff8557d218.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3899118d263cf54bd46cb7f24340ddab.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c0ccac1a03d9546deb1cb8e9fb4e816f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/507923eb7a7d762d707c20f9c1a18eed.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf2355f234b3682284c39d998dcbc1c8.jpg',
    name: 'High School Prodigies Have It Easy Even In Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0be23d07ab3505ebeb431e401c0d0e85.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8bbc912efbdbcf655012d909904ff122.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f9426116306b2388fa06de84752a4bab.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/30317658143e7a45be534282721393c4.jpg',
    name: 'How Not to Summon a Demon Lord',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/de63a8bb275a1d1fadd6726f57cdc1d2.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6401b828d7db85669e185d115fa102a4.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/fb3029ec4ecc1a392940938cea506cc8.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1e6648f8636de8fd224e3aa9b1901f3e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/732076f3b53c9eecc4e21002c1668a1f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a31daf29d5273a57a884c5b8cd96d0f0.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9b6c2b9c5250a8a966693e32df9ec04d.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/908263a2588b24bd827345eb0e57b7e8.jpg',
    name: "Wise Man's Grandchild",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/31105ab14e9bad66b2fbd5fb7ba7acfe.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cf1e46c1d9056a5fbc6f09dd8e3577c2.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpg',
    name: 'One-Punch Man',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/682ceb64923048680e5d827539995a82.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e22c89d747e39a451a7cb82f87799c7f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/94b101b1498f04980ef7d55b749d4ee9.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/908263a2588b24bd827345eb0e57b7e8.jpg',
    name: "Wise Man's Grandchild",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3bfb58455526ffccf0cbc0f261ee0b37.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/054609762035e488622ceba02950fc35.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6854edddc58c523f34325743c137374a.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4f2269e9d9829e0f8316e385dc1a7b2f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9cba059b7c633e6dc9de4d642cad1471.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cecc92af3d3302aaacb58a5ffa5e1eb4.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a6503f39c333f073ce82214797518692.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a24739815dd452ea961ef2e847d92f1a.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/25d40698c5c58c5f0ba0d2daf1974516.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/30317658143e7a45be534282721393c4.jpg',
    name: 'How Not to Summon a Demon Lord',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cbb0a371632fd6e8b0c1a838485bf9c4.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3bd485e2707578b2e69be7f159676859.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/459d83ff05eb9ee6cf2bfc5302b95239.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e39d4d67f5d18d3cca5d13b6b9dd13a9.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/beaa9dbd3c851e7edb34f888840fdb54.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6e0c96c9d215c48c279d321addabb948.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a4c7fcdd501afccce947682f60d70bcb.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/908263a2588b24bd827345eb0e57b7e8.jpg',
    name: "Wise Man's Grandchild",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f78b4529eed892fb22c0cf01fce94f4e.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b98f7b16bf95310f399a81e00be45995.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6d91caea720b92e978b99bdfeaf74d78.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1d671253e8b8674463fca562ee3dbf53.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e2a93f5105ec79a675b597ab5860a3bb.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c4475a273780c10abdc1422b0e56713e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d6c9366380bc715f9863febdd7faf6b7.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cb90198f0ed1df5cb0bf36828a07891b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/792bb598f258896ef57e3d4db5405821.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/30317658143e7a45be534282721393c4.jpg',
    name: 'How Not to Summon a Demon Lord',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a9ba888190a28853613ef51c24ec4322.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/908263a2588b24bd827345eb0e57b7e8.jpg',
    name: "Wise Man's Grandchild",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/759644da64533fb61ba27da1e9c2f962.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c7b6627f8880562f34268096f9c55c05.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1f5a1b25524bac23713b5af3c96a1090.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1c3210e9d5a10b7a3ba3205d2c83e514.jpeg',
    name: "Chio's School Road",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4e499b07882987987bec0db89c4b49a2.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6e24189616325b736981ec10c4517f08.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9c10cd85580394627932e9ee9ef87df6.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/de8e2aaf2f8a1e0947287570c645ee31.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/94536ae32c4df9f96d8d8194c674c45d.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2ead3c2f84c59e16757b5b74ac612e9a.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/16298e46c642c6a60fa974c8aa99f223.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/939f4d2d41695cd8403b7699b60cfd14.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/07db4980fadb56f677864ec7d9c27fb9.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/908263a2588b24bd827345eb0e57b7e8.jpg',
    name: "Wise Man's Grandchild",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/936995ec4b199b1f69267fdef94bc2a0.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a8f5d6cd0f0c23c8c6be1935b2b3ebe2.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/908263a2588b24bd827345eb0e57b7e8.jpg',
    name: "Wise Man's Grandchild",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/63cacde8bf7e2f840ee0a563cdd11c99.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf2355f234b3682284c39d998dcbc1c8.jpg',
    name: 'High School Prodigies Have It Easy Even In Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/97bad0605d6f8ed541ad509f6053d67c.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f979d234e00e07712247a0993c5dc4e6.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a8ed3820e298b0a25460300f9fbb288d.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/18ed00de92085a040974b7468ac86846.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ee8793b2cc594d1ca5a41cd767bdfa1f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b20f4aadcfb1f7821d4f47ab91432d3b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2f4f04fe9370de2432301b558e479d8a.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/18fb3c24e104c422c3ac70e6c983b002.jpg',
    name: 'The 8th son? Are you kidding me?',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5dcc31d35a0de9e0b358417164b9c3ae.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2271f769a4b381e392e0d2cd3f74f7b0.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/95523c063a6faadc52712c606fffd8b7.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/70edeaa43504c44b0d10d7d724524afa.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c5b1b44bc20f879ab2efe5b7ddcfe530.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/908263a2588b24bd827345eb0e57b7e8.jpg',
    name: "Wise Man's Grandchild",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9d74b512fb8977dc79fc994ced5caaf9.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf2355f234b3682284c39d998dcbc1c8.jpg',
    name: 'High School Prodigies Have It Easy Even In Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c9e5105b4e19c53525baa81204723adf.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/64a13c04ae1dffb1dfc91ce87777beed.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/dc9ded83c656481f095583fc56a0bd0e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/745d6f6f240ffc99cc08f4f4d52f6e0b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpg',
    name: 'One-Punch Man',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d93be75155b98aca898fef7714e42172.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a58e359c89cc2ee24368102cc795c484.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e4c92ce04e7cd56d266aabbbf2cc4daf.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/588d3875fed2d44b3aef53a17598651c.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/57c297475f6e19025f5fd8202cb1d120.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/412c15bb961fd69b0418c2d55e2146ba.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ca52cdfe3ba05c22af68c6b53e118d46.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/fe993fce1bfac0434eef44a449f1682b.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4b5fdd73a9fc65302c8f21e29a9446d3.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/486ba4597d19aa71cc5fe78441b206b6.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c7fb95ec138af3bf4ae99484d7591a88.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7ba79a8d58748f28eb7936ea33243d51.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/65e6558666909fb904ba5d7c75e22f9b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/844131691cc76ab8eeb23f98460b0e34.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/abdef70978580bec55b12e6ea8afe819.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/212693a368a69f09b55bf54a0f4abf55.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpg',
    name: 'One-Punch Man',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/01e397959003ebd523ceb8b339f1dd5e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/16ba1073e34eed5574c795fcc66284da.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/01d92833730507a6883770cd547a7364.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/76257e029e2e01911e289b117e164ec3.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/35c4c2b8bb74d8ee888aeff5a90e911c.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/215e74fe403867e351e3ad12ddde881e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/664b5274a6f9dd40d5e095d0209f99cc.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpg',
    name: 'One-Punch Man',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e81f9f62258b244517e0b1d32a8e6c88.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7c89690b93bbb067415de384d70dfa50.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/30317658143e7a45be534282721393c4.jpg',
    name: 'How Not to Summon a Demon Lord',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e5594086baf017d86e1ea1bde9643e7b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/301e8cc3be020678b3728f34c9a8f993.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b9fbee83c6c9a6353383a36b81d86121.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/84b3a1c7969d485c89183b0eaac41424.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4df7258360bda52ae01941cfc5506472.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/143c2a7e92235661e0885c0fb1db8c22.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/90ea795e3acb23a8f0a1b48f3b6f98f6.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f7c11c5cfed471edc0913a03ff991347.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/03788eee36884310bade0445a57ee41e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0b9d827f813bd0f5b934721b7cce37d3.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/058d765fbd994ac9ae76d098455dd6b9.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1c3210e9d5a10b7a3ba3205d2c83e514.jpeg',
    name: "Chio's School Road",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/72c434297058c89fcf01113333c0af08.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/18fb3c24e104c422c3ac70e6c983b002.jpg',
    name: 'The 8th son? Are you kidding me?',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/95e17ad6f6fd42f70e9fcef4d34d812a.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8c3453c354b34224f4f4bdaff98bde74.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/69349336c3ef4817e40d7f4b99bee4e5.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d6d97007d9890cfa540eb4fe3d514b1a.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/03d08da9d96f9f812054001be7a24bc6.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpg',
    name: 'One-Punch Man',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f6e652a05c944ef5a4df2f343868b621.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/628eda0744f33b26eb2109ee7d86217b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3ac21d80dc8a8dda4e40b7ba3227ad35.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/18fb3c24e104c422c3ac70e6c983b002.jpg',
    name: 'The 8th son? Are you kidding me?',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5d22e6eee9a6fe35c8efd2666312bccf.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/77daa3cdbbdb0408261a0894a256e63b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d6f7322acdd63ccc27387feea0fd8a66.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e84669c3947281aab679fbe7223c2d15.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a57c15b87dcfd41234e3d5f592f0db34.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8724eab72832289570eb6dc1cb1ec5f5.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e2204b68fbc39a13f19e12bfc59010b7.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d4d2ddc024582047c509cec76911b912.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpg',
    name: 'One-Punch Man',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2448e4a1ca6cd2d0b1ec883bf134819e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6998c4cee8b44f69d13db1886ff4d97f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf2355f234b3682284c39d998dcbc1c8.jpg',
    name: 'High School Prodigies Have It Easy Even In Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3890ca958bbca9220f528e58a0df9df5.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/32ce4dddc2f41a169b4e857313152572.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/30317658143e7a45be534282721393c4.jpg',
    name: 'How Not to Summon a Demon Lord',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9c2a14807e4955d04192f4090e16f546.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/da52aef2d8bd20395e9f71f123838d4b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0ca007eab3908b867106812c45832058.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/fbb4f7f661b9fe2e169bde507c96df44.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/83697a20a24c8d623cba002043e8e524.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f46cd2ceb76b71f4bb861015fa3ac44e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/90b2bb6db92eede0ed20d496d80ebe2f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/18fb3c24e104c422c3ac70e6c983b002.jpg',
    name: 'The 8th son? Are you kidding me?',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b073bb0efaf0be4fba67716877efa6f0.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6577d3328ddf02e476ab14fd3027a9ef.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d817405dd8bb881c6cbea6bfaff591c2.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7d589c8744b345f67fda37114300a29f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0fd77ae7bf41f1e2c0dd6007535ec4b6.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/554197194719955e2f746fc300540f32.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0c58299f9db287a925a428c64db90dcf.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf2355f234b3682284c39d998dcbc1c8.jpg',
    name: 'High School Prodigies Have It Easy Even In Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/6e8c7c86da42a40a31ab8ce81a400dce.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/40eab97f532899de7216c9d551d07752.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/dbe188f8378a1fbeb6bd75dca5f4833d.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/65129fea361aab548ba2e3bcfd4a0118.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/30317658143e7a45be534282721393c4.jpg',
    name: 'How Not to Summon a Demon Lord',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/84d36e94b1c595fc6c6c0d73bdef7f4d.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c31d537b1e83ad171aea351e910ef94b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1c3210e9d5a10b7a3ba3205d2c83e514.jpeg',
    name: "Chio's School Road",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/74671147b3781ae28f15be2dd0bcf24d.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e4be328f9a67304e19e5ee651bcef732.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7061f82362e5a01a9a52292dc0ba9aba.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5c0bd5c7e36d1965d656b7029f5172b5.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/908263a2588b24bd827345eb0e57b7e8.jpg',
    name: "Wise Man's Grandchild",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1c82ab8eee870f9a58417f2ecc50cf3b.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/86d3a9773aa96a2a63379e8ea5b91ce0.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7f642e1bbfab57913b2d83d817591dc1.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/993f03ddb5e457fb16ca1785d20ac6ed.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/180e533555ad3040dba95a9125875217.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/31507f291feca0f25adfd4637af1ba37.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b65a9ad4bb04f5399272462f8ce2fea6.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1c3210e9d5a10b7a3ba3205d2c83e514.jpeg',
    name: "Chio's School Road",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e2ec254d16d1f5fd43ff44b6ac695260.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/231f27f174d87bc865b49ac74c2f7af3.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d01c7d97a61d77124297228493887fc1.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a08a7f5dad1d8fb3f67463e0a7f1805f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d38842a34b6c976f756c321716d66eea.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ca8688168524660ef57ef0b0ca704488.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4a7423baa9f17145510057a197ed1d61.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c3721a21b0873d4b7a715f5d93c7152f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0220a3c6b7dd9ddb0bb61fd389978715.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpg',
    name: 'One-Punch Man',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d1e3243500923d6dc3b5e6c65c2ae817.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/9b70b2a23cff51638cc050c0b746f8ea.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/06784a6c00c9bd7fd08ef97418b7cdbe.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ae3db32043055f3a1c0f85d76e62773c.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5b8e964004386a4334ea3f9a2f7ac810.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d29d970a8fda9e851e615de05edd4afa.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cc56e86eb68f3afde55d62e008fddb44.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f3404b85d3d49679ce3f5d00bc616739.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/adea712fbf73a3096ace5c4bcfb94ab7.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/37949a44e0180d722110914b2a1fa03a.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4602dbfcd777f038fde7abefcd854309.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/908263a2588b24bd827345eb0e57b7e8.jpg',
    name: "Wise Man's Grandchild",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d9233c83406f06a1a6c8e474a12a2e8e.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/68fe594e7ccc93f4e0a05e6c951de18b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/31cd3ebd7a8649f1cde3bf8c4d9093f5.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/dbdff189a7b97afadbe73b778583de83.jpg',
    name: 'My Hero Academia',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cfb86386f124bc98e39207712a87ea77.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/522f11c4163412c131da8d01709e5786.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1c3210e9d5a10b7a3ba3205d2c83e514.jpeg',
    name: "Chio's School Road",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/aac96ff71705e748838441530299a535.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/bc57d31b694bec28f882b9ff05ac625b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/474f35305db31cd1627af8aaff3ff40e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/142316559b7e3be70a1f1e83afaa55ec.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/0e7414bfca0a4185a6b5af2a5f68dc17.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/223679a53275a31e40b2c89ff63897a8.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f414fcce81a5735aca37b0db8e65a52f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b6fce9d24590fef7edda662a52648bbf.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/cec7b1597bd1969479a3210d99468d70.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpg',
    name: 'One-Punch Man',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d011fbf6561f12e1dde8e87a1ffa3da1.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpg',
    name: 'One-Punch Man',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/bc8a832dc242d852af39a6d7bf87786f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/30317658143e7a45be534282721393c4.jpg',
    name: 'How Not to Summon a Demon Lord',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/88b4aebac7dcec83fee7de0abc541195.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/080faf1eeab820e04500a9c8f91c07ba.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/050964ab0a90101528f1b743b9604443.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c18ab29ef90530e505a573052073dff8.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f72f497a51757117af359c86c1fd8643.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/fc8eebb6234f88d6c9e54095ca044622.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5c2122871212f063628d60a0280568bf.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/bee3fd0fc9cbaaeeb77ebe276afef11d.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/154b5d3b285e47f078e7b5e875a8a14f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/87d30ea337ede1d6ac9d9c9c8e87d383.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f9eb29404c2a1fcc10cac63b65b7e04c.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/7e819184676ac8d8951e03380516156c.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/8d32d790fa6d679dd4fce978e1ea070d.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/fba3cfcc85c9576c90a3784680585893.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/762ac50337c44fcffb7c02548b018ede.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1c3210e9d5a10b7a3ba3205d2c83e514.jpeg',
    name: "Chio's School Road",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/fb42234d7e7fd37c27f97be5571da2bd.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4716d4f734e70e7d1688e0ed6e9b23c0.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/abfe5dfa627e8fd81d1b7c99f4712288.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/69b5ff810dd46261afc1d0f47173569b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a321cc7a0ba03d4c0125967c9ea9729f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/47efe819e954f83cf0b8e022c39488ce.jpg',
    name: 'JUJUTSU KAISEN',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/524c37a1729b9d5c8ea3847e28194e3d.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/d8d670ef08c49d59226c901583b175e1.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4a7603eca3b0c5f3b7fb4bdb5a8c9f36.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/3822ad302d17b09643a83243762a1cfb.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4103ecfe99ba34cb3b81c87b000b4eaa.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/cf2355f234b3682284c39d998dcbc1c8.jpg',
    name: 'High School Prodigies Have It Easy Even In Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/b2be616e9f76a07f461e915b2d6e0c57.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/52edb7a843abacb4ff0f642c8eda1440.jpg',
    name: 'Bleach',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/22fd939ffe605c413188dd2fb0e3099f.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a4f9c14d83c491f77d7e811a4474c34c.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/6a63d28dc4193210a69c83f1fca67bf2.jpeg',
    name: 'Another',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/126218d1b016594973594287c24bcc88.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1c3210e9d5a10b7a3ba3205d2c83e514.jpeg',
    name: "Chio's School Road",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e376faed44bf14e4c743c93dca244467.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/a13d79d4dffc0c3eb29898cdfe68b67b.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1c3210e9d5a10b7a3ba3205d2c83e514.jpeg',
    name: "Chio's School Road",
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/251dea60a6b8649bba1d79cfa6fc0c75.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpg',
    name: 'Naruto',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/ea976df50bf201db97c78c2e2ed72f64.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpg',
    name: 'One-Punch Man',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/c1ed29b536d5ee93654d09f66ba01e4c.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/877f8a89760d1fda9b886e59cd138ae2.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/80326fa1522797318ff6bcef1cf35732.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/18fb3c24e104c422c3ac70e6c983b002.jpg',
    name: 'The 8th son? Are you kidding me?',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/926c943bd1cbe7274fce04efc7640d5f.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/d8eed44e3d48097ab5fd36b6815fc18e.jpg',
    name: 'One-Punch Man',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/e532c08bb279537952e96c5c3d650034.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1aeb8b8165061988e834cacbd8be3dea.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/83e9ea69ef24e4836b3e81b44de70be5.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/641f1b360dca7b98d9c7e503feda4bae.jpg',
    name: 'Isekai Cheat Magician',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/bd6081cd25cd3ef90f1287d7badbba82.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/291c6c3b60857afabe46899f848079a4.jpg',
    name: 'Re:ZERO -Starting Life in Another World',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/78a6b68ce1995d9654fddfd51ac29977.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/4fadd5f113c28de1b22d4ef67a78890b.jpg',
    name: 'Gintama',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/dc0597d685e2ea0d1e23cf1ee469ac88.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg',
    name: 'Attack on Titan',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/96361bbd829a6ba6aa8d7e803b18ef3e.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpg',
    name: 'One Piece: East Blue',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2471c70979be4a83f78ace6df8b06ea9.jpg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/18fb3c24e104c422c3ac70e6c983b002.jpg',
    name: 'The 8th son? Are you kidding me?',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/825aed746ea68855fc856b0600a4d774.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/397c10381ef95bb94e01b5cc8e770c3e.jpg',
    name: 'Berserk',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/81e133ee382670d9d23028d851538aaa.jpeg',
  },
  {
    avatar:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/8a94435b1ba75c09126441f41f5f497d.jpg',
    name: 'That Time I Got Reincarnated as a Slime',
    image:
      'https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/4fbfedc219a7ef7cf2974e2104ad880d.jpg',
  },
];

export default posts;
