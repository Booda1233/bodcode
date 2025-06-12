

import { Lesson } from '../../types';

export const intermediateLessons: Lesson[] = [
  {
    id: 'l2-lesson-1',
    slug: 'data-structures',
    title: 'هياكل البيانات (Lists, Tuples, Dictionaries, Sets)',
    description: 'طرق متقدمة لتنظيم مجموعات من البيانات والتعامل معها بكفاءة.',
    content: [
      { type: 'heading', text: 'تنظيم البيانات زي المحترفين: هياكل البيانات!' },
      { type: 'paragraph', text: 'لما يكون عندك بيانات كتير، زي مثلاً قايمة بأسماء طلاب أو درجاتهم، أو معلومات عن منتجات في متجر، بتحتاج طرق منظمة عشان تخزن البيانات دي وتتعامل معاها بسهولة. بايثون بتقدملك مجموعة قوية من "هياكل البيانات" (Data Structures) المدمجة اللي بتساعدك في المهمة دي. أشهرهم هم القوائم (Lists)، الصفوف (Tuples)، القواميس (Dictionaries)، والمجموعات (Sets).' },
      { type: 'subheading', text: '1. القوائم (Lists - `list`):' },
      { type: 'paragraph', text: 'القائمة هي مجموعة مرتبة من العناصر، وممكن تغير فيها (Mutable) بعد ما تعملها. يعني تقدر تضيف عناصر، تمسح عناصر، أو تغير قيمة عنصر موجود. بتتعرف القائمة باستخدام أقواس مربعة `[]` والعناصر بتفصل بينهم بفاصلة `,`.' },
      { type: 'code', language: 'python', text: 'my_list = [1, "hello", 3.14, True] # القائمة ممكن تحتوي على أنواع بيانات مختلفة\nempty_list = []\n\nprint(my_list)      # [1, \'hello\', 3.14, True]\nprint(my_list[1])   # الوصول للعنصر التاني (الفهرسة بتبدأ من 0) -> hello\n\nmy_list[0] = "واحد" # تغيير قيمة عنصر\nprint(my_list)      # [\'واحد\', \'hello\', 3.14, True]\n\nmy_list.append("جديد") # إضافة عنصر في الآخر\nprint(my_list)      # [\'واحد\', \'hello\', 3.14, True, \'جديد\']\n\nmy_list.insert(2, "مضاف") # إضافة عنصر في مكان محدد\nprint(my_list)\n\nmy_list.remove(True) # مسح أول ظهور لقيمة معينة\nprint(my_list)\n\nlast_item = my_list.pop() # مسح آخر عنصر وإرجاعه\nprint(f"العنصر المحذوف: {last_item}, القائمة الآن: {my_list}")\n\nprint(f"طول القائمة: {len(my_list)}") # معرفة عدد العناصر\n\nnumbers = [3, 1, 4, 1, 5, 9, 2]\nnumbers.sort() # ترتيب القائمة (تصاعدي)\nprint(numbers)' },
      { type: 'paragraph', text: 'القوائم مفيدة جداً لما تكون محتاج تخزن مجموعة عناصر بترتيب معين وممكن تحتاج تعدل عليها بعدين.'},

      { type: 'subheading', text: 'التقطيع (Slicing) في القوائم والنصوص:' },
      { type: 'paragraph', text: 'التقطيع طريقة قوية عشان تاخد جزء من القائمة (أو النص). بتستخدم الأقواس المربعة مع تحديد نقطة البداية والنهاية (مش داخلة معانا) والخطوة (اختياري).' },
      { type: 'code', language: 'python', text: 'numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n\nprint(numbers[2:5])    # العناصر من الفهرس 2 إلى ما قبل 5 -> [2, 3, 4]\nprint(numbers[:3])     # من البداية إلى ما قبل 3 -> [0, 1, 2]\nprint(numbers[5:])     # من الفهرس 5 إلى النهاية -> [5, 6, 7, 8, 9]\nprint(numbers[-1])     # آخر عنصر -> 9\nprint(numbers[-3:])    # آخر 3 عناصر -> [7, 8, 9]\nprint(numbers[::2])    # كل العناصر مع خطوة 2 (يعني واحد آه وواحد لأ) -> [0, 2, 4, 6, 8]\nprint(numbers[::-1])   # عكس القائمة -> [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]' },

      { type: 'subheading', text: '2. الصفوف (Tuples - `tuple`):' },
      { type: 'paragraph', text: 'الصف زي القائمة بالظبط من حيث إنه مجموعة مرتبة من العناصر، لكن الفرق الجوهري إن الصف "غير قابل للتغيير" (Immutable) بعد ما تعمله. يعني مينفعش تضيف أو تمسح أو تغير عناصر فيه. بتتعرف الصفوف باستخدام أقواس عادية `()`.' },
      { type: 'code', language: 'python', text: 'my_tuple = (1, "hello", 3.14, True)\nempty_tuple = ()\nsingle_item_tuple = (5,) # لو صف فيه عنصر واحد، لازم تحط فاصلة بعده\n\nprint(my_tuple)\nprint(my_tuple[0]) # الوصول للعناصر زي القائمة بالظبط\n\n# my_tuple[0] = "تغيير"  # السطر ده هيعمل خطأ (TypeError) لأن الصفوف immutable\n\nprint(len(my_tuple))\n\n# ممكن تستخدم الصفوف كمفاتيح في القواميس (هنشوفها بعدين) لأنها immutable' },
      { type: 'paragraph', text: 'بنستخدم الصفوف لما نكون عايزين نخزن مجموعة بيانات مش هتتغير، أو لما نحتاج نضمن إن البيانات دي متتغيرش بالغلط.'},

      { type: 'subheading', text: '3. القواميس (Dictionaries - `dict`):' },
      { type: 'paragraph', text: 'القاموس هو مجموعة من العناصر غير مرتبة (في الإصدارات القديمة من بايثون، لكن من بايثون 3.7+ بقى بيحافظ على ترتيب الإدخال). كل عنصر في القاموس عبارة عن زوج من "مفتاح" (Key) و "قيمة" (Value) مرتبطة بيه. المفاتيح لازم تكون فريدة (Unique) وغير قابلة للتغيير (Immutable - زي النصوص والأرقام والصفوف). القيم ممكن تكون أي نوع بيانات. بنعرف القواميس باستخدام أقواس معقوفة `{}`.' },
      { type: 'code', language: 'python', text: 'person = {\n    "name": "أحمد",\n    "age": 30,\n    "city": "القاهرة",\n    "is_student": False\n}\nempty_dict = {}\n\nprint(person)\nprint(person["name"]) # الوصول للقيمة عن طريق المفتاح -> أحمد\nprint(person.get("age")) # طريقة تانية للوصول، لو المفتاح مش موجود بترجع None بدل خطأ\n\nperson["email"] = "ahmed@example.com" # إضافة زوج جديد أو تعديل قيمة مفتاح موجود\nprint(person)\n\nperson["age"] = 31 # تعديل قيمة مفتاح موجود\nprint(person)\n\ndel person["city"] # مسح عنصر عن طريق المفتاح\n# removed_value = person.pop("is_student") # مسح عنصر وإرجاع قيمته\n\nprint(person.keys())   # بيعرض كل المفاتيح\nprint(person.values()) # بيعرض كل القيم\nprint(person.items())  # بيعرض كل الأزواج (مفتاح، قيمة)\n\n# المرور على عناصر القاموس\nfor key in person:\n    print(f"{key}: {person[key]}")\n\nfor key, value in person.items():\n    print(f"المفتاح {key} يحمل القيمة {value}")' },
      { type: 'paragraph', text: 'القواميس ممتازة لتخزين البيانات اللي ليها علاقة ببعضها، زي معلومات عن شخص أو منتج، وبتسمح بوصول سريع للقيم عن طريق المفاتيح.'},

      { type: 'subheading', text: '4. المجموعات (Sets - `set`):' },
      { type: 'paragraph', text: 'المجموعة هي مجموعة من العناصر غير مرتبة وغير قابلة للتكرار (Unique). يعني لو حاولت تضيف نفس العنصر أكتر من مرة، هيتخزن مرة واحدة بس. بتتعرف المجموعات باستخدام أقواس معقوفة `{}` زي القواميس، لكن من غير أزواج مفتاح وقيمة. أو باستخدام دالة `set()`.' },
      { type: 'code', language: 'python', text: 'my_set = {1, 2, 3, "hello", 2, 1} # الـ 1 والـ 2 المتكررين هيتخزنوا مرة واحدة بس\nempty_set = set() # لعمل مجموعة فارغة، لازم تستخدم set() مش {} لأن {} بتعمل قاموس فاضي\n\nprint(my_set) # الترتيب ممكن يختلف كل مرة (في الإصدارات القديمة)\n\nmy_set.add(4)     # إضافة عنصر\nmy_set.add("hello") # "hello" موجودة بالفعل، مش هيحصل تغيير\nprint(my_set)\n\nmy_set.remove(1)  # مسح عنصر (لو مش موجود هيعمل خطأ KeyError)\nmy_set.discard(10) # مسح عنصر (لو مش موجود مش هيعمل حاجة)\nprint(my_set)\n\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\n\nprint("الاتحاد:", set1.union(set2))         # {1, 2, 3, 4, 5}\nprint("التقاطع:", set1.intersection(set2))  # {3}\nprint("الفرق:", set1.difference(set2))      # {1, 2} (العناصر اللي في set1 ومش في set2)' },
      { type: 'paragraph', text: 'المجموعات مفيدة لما تكون عايز تتأكد إن العناصر فريدة، أو لما تكون عايز تعمل عمليات رياضية على المجموعات زي الاتحاد والتقاطع والفرق.'},
      { type: 'paragraph', text: 'كل هيكل من هياكل البيانات دي ليه مميزاته واستخداماته. اختيار الهيكل المناسب بيعتمد على طبيعة البيانات اللي عندك والعمليات اللي عايز تعملها عليها.'}
    ],
    quiz: [
      { id: 'q4-1', text: 'إيه الفرق الرئيسي بين الـ List والـ Tuple؟', options: ['الـ List أسرع', 'الـ Tuple لا يمكن تغيير عناصرها بعد إنشائها (immutable)', 'الـ List لا يمكن تغيير عناصرها', 'مفيش فرق، بس الأقواس مختلفة'], correctAnswerIndex: 1, explanation: 'الـ Tuples غير قابلة للتغيير (immutable) بمجرد إنشائها، بينما الـ Lists قابلة للتغيير (mutable).' },
      { id: 'q4-2', text: 'أي من التالي يُستخدم لتعريف قاموس (Dictionary) في بايثون؟', options: ['[]', '()', '{} أو dict()', '<>'], correctAnswerIndex: 2, explanation: 'الأقواس المعقوفة `{}` تستخدم لتعريف القواميس (والمجموعات)، ولكن لقاموس فارغ أو لتعريف صريح نستخدم `dict()`.' },
      { id: 'q4-3', text: 'ما هي الخاصية الأساسية للمفاتيح (Keys) في القاموس؟', options: ['يجب أن تكون أرقامًا فقط', 'يمكن أن تتكرر', 'يجب أن تكون فريدة (unique) وغير قابلة للتغيير (immutable)', 'يجب أن تكون نصوصًا فقط'], correctAnswerIndex: 2, explanation: 'مفاتيح القاموس يجب أن تكون فريدة وغير قابلة للتغيير (مثل النصوص، الأرقام، أو الصفوف).' },
      { id: 'q4-4', text: 'إذا كان لديك قائمة `my_list = [10, 20, 30, 40]`، فماذا سيعرض `my_list[1:3]`؟', options: ['[20, 30]', '[10, 20]', '[20, 30, 40]', '[10, 20, 30]'], correctAnswerIndex: 0, explanation: 'التقطيع `[1:3]` يأخذ العناصر من الفهرس 1 حتى ما قبل الفهرس 3.' },
      { id: 'q4-5', text: 'ما هي وظيفة دالة `.append()` عند استخدامها مع قائمة؟', options: ['لحذف عنصر من القائمة', 'لإضافة عنصر في بداية القائمة', 'لإضافة عنصر في نهاية القائمة', 'لترتيب عناصر القائمة'], correctAnswerIndex: 2, explanation: '`.append()` تضيف عنصرًا جديدًا إلى نهاية القائمة.' },
    ]
  },
  {
    id: 'l2-lesson-2',
    slug: 'object-oriented-programming',
    title: 'مقدمة في البرمجة الشيئية (OOP)',
    description: 'فهم المبادئ الأساسية للبرمجة الشيئية: الكائنات (Objects) والأصناف (Classes).',
    content: [
      { type: 'heading', text: 'بناء عالمك الخاص: البرمجة الشيئية (Object-Oriented Programming - OOP)' },
      { type: 'paragraph', text: 'البرمجة الشيئية (أو OOP اختصاراً) هي طريقة أو أسلوب في كتابة البرامج بيخلينا نفكر في البرنامج بتاعنا كأنه مكون من مجموعة من "الأشياء" أو "الكائنات" (Objects) اللي بتتفاعل مع بعضها. كل كائن من دول بيكون ليه "صفات" (Attributes) خاصة بيه، وبيقدر يعمل "أفعال" (Methods) معينة.' },
      { type: 'paragraph', text: 'تخيل مثلاً إنك بتعمل برنامج عن العربيات. في البرمجة الشيئية، كل عربية هتكون "كائن". الكائن ده ليه صفات زي اللون، الموديل، السرعة الحالية، وبيقدر يعمل أفعال زي "يمشي"، "يقف"، "يزود سرعته".'},
      { type: 'subheading', text: '1. الأصناف (Classes): المخطط أو القالب' },
      { type: 'paragraph', text: 'قبل ما نعمل أي كائن (عربية مثلاً)، لازم يكون عندنا "مخطط" أو "قالب" (Blueprint) بيوصف شكل العربية دي عامل إزاي وإيه الصفات والأفعال اللي ممكن تكون عندها. المخطط ده بنسميه في البرمجة "الصنف" (Class).' },
      { type: 'code', language: 'python', text: 'class Car:  # تعريف صنف (Class) اسمه Car\n    pass # pass يعني "مفيش حاجة هنا دلوقتي"' },
      { type: 'subheading', text: '2. الكائنات (Objects): النسخ الفعلية من الصنف' },
      { type: 'paragraph', text: 'بعد ما عملنا الصنف (المخطط)، نقدر نعمل منه أي عدد من "الكائنات" (Objects). كل كائن بيكون "نسخة" (Instance) من الصنف ده.' },
      { type: 'code', language: 'python', text: 'class Dog:\n    pass \n\nmy_dog1 = Dog() \nmy_dog2 = Dog() \n\nprint(type(my_dog1)) \nprint(my_dog1)' },
      { type: 'subheading', text: '3. المُنشِئ (Constructor) - دالة `__init__`:' },
      { type: 'paragraph', text: 'لما بنعمل كائن جديد، ساعات بنكون عايزين نديله شوية قيم أولية لصفاته على طول. هنا بنستخدم دالة خاصة جوه الصنف اسمها `__init__`. أول معامل فيها بيكون اسمه `self` وبيشير للكائن نفسه.'},
      { type: 'code', language: 'python', text: 'class Car:\n    def __init__(self, color, model):\n        self.color = color\n        self.model = model\n        self.speed = 0\n        print(f"تم إنشاء عربية {self.color} موديل {self.model}!")\n\ncar1 = Car("أحمر", "فيراري")\nprint(f"لون العربية: {car1.color}")' },
      { type: 'subheading', text: '4. الأفعال أو الطرق (Methods):' },
      { type: 'paragraph', text: 'الأفعال هي الدوال اللي بنعرفها جوه الصنف، وبتمثل الحاجات اللي الكائن يقدر يعملها. أول معامل فيها لازم يكون `self`.'},
      { type: 'code', language: 'python', text: 'class Car:\n    def __init__(self, color, model):\n        self.color = color\n        self.model = model\n        self.speed = 0\n\n    def accelerate(self, amount):\n        self.speed += amount\n        print(f"العربية {self.model} سرعتها زادت وبقت {self.speed} كم/ساعة.")\n\nmy_car = Car("أسود", "مرسيدس")\nmy_car.accelerate(50)' },
    ],
    quiz: [
      { id: 'q5-1', text: 'في البرمجة الشيئية، الـ Class يعتبر إيه؟', options: ['مثال من كائن (Instance of an object)', 'مخطط أو قالب لإنشاء الكائنات (Blueprint for creating objects)', 'دالة جاهزة (Built-in function)', 'متغير (Variable)'], correctAnswerIndex: 1, explanation: 'الـ Class هو المخطط أو القالب الذي يتم استخدامه لإنشاء كائنات لها نفس التركيب والسلوك.' },
      { id: 'q5-2', text: 'ماذا يسمى الكائن (Object) بالنسبة للصنف (Class)؟', options: ['أب (Parent)', 'ابن (Child)', 'نسخة أو مثيل (Instance)', 'وظيفة (Function)'], correctAnswerIndex: 2, explanation: 'الكائن هو نسخة أو مثيل (Instance) من الصنف.' },
      { id: 'q5-3', text: 'ما هي الدالة الخاصة التي يتم استدعاؤها تلقائيًا عند إنشاء كائن جديد من صنف في بايثون؟', options: ['`__create__()`', '`__main__()`', '`__init__()`', '`__object__()`'], correctAnswerIndex: 2, explanation: 'دالة `__init__` هي المُنشِئ (Constructor) الذي يتم استدعاؤه عند إنشاء كائن جديد.' },
      { id: 'q5-4', text: 'ما هو المعامل الأول الذي يجب أن يُمرر دائمًا إلى أي Method داخل Class في بايثون (ويشير إلى الكائن نفسه)؟', options: ['`object`', '`instance`', '`this`', '`self`'], correctAnswerIndex: 3, explanation: '`self` هو المعامل المتعارف عليه الذي يشير إلى الكائن الحالي داخل الصنف.' },
      { id: 'q5-5', text: 'ماذا تسمى الدوال المعرفة داخل الصنف (Class)؟', options: ['وظائف (Functions)', 'إجراءات (Procedures)', 'طرق (Methods)', 'وحدات (Modules)'], correctAnswerIndex: 2, explanation: 'الدوال المعرفة داخل الصنف تسمى طرق (Methods) وهي تمثل سلوكيات الكائن.' },
    ]
  },
  {
    id: 'l2-lesson-3',
    slug: 'list-comprehensions',
    title: 'فهم List Comprehensions لإنشاء قوائم فعالة',
    description: 'تعلم كيف تستخدم List Comprehensions لكتابة كود بايثون أكثر إيجازًا وقراءة لإنشاء القوائم.',
    content: [
      { type: 'heading', text: 'ما هي List Comprehensions؟ طريقة بايثونية مختصرة!' },
      { type: 'paragraph', text: 'تخيل إنك عايز تعمل قايمة جديدة بناءً على قايمة موجودة. الطريقة التقليدية هي إنك تعمل حلقة `for` فاضية وتضيف فيها العناصر. List Comprehensions بتقدملك طريقة تانية، شيك ومختصرة، عشان تعمل كل ده في سطر واحد بس!' },
      { type: 'paragraph', text: 'البناء الأساسي بتاعها بيكون كده: `[expression for item in iterable if condition]`' },
      { type: 'code', language: 'python', text: '# الطريقة التقليدية\nsquares_loop = []\nfor x in range(5):\n    squares_loop.append(x**2)\nprint(f"بالحلقة: {squares_loop}")\n\n# باستخدام List Comprehension\nsquares_comp = [x**2 for x in range(5)]\nprint(f"بالـ Comprehension: {squares_comp}")' },
       { type: 'paragraph', text: 'ممكن كمان تضيف شرط `if` للفلترة.'},
       { type: 'code', language: 'python', text: 'evens_comp = [x for x in range(10) if x % 2 == 0]\nprint(f"الأرقام الزوجية: {evens_comp}")\n\n# ممكن تعمل بيها حاجات أعقد شوية، زي list of lists\nmatrix = [[j for j in range(3)] for i in range(2)]\nprint(f"ماتريكس: {matrix}") # [[0, 1, 2], [0, 1, 2]]\n\n# أو تستخدم تعبير شرطي في الـ expression نفسها\nresults = ["زوجي" if num % 2 == 0 else "فردي" for num in range(5)]\nprint(results) # [\'زوجي\', \'فردي\', \'زوجي\', \'فردي\', \'زوجي\']' },
      { type: 'subheading', text: 'فيه كمان Dictionary Comprehensions و Set Comprehensions:'},
      { type: 'paragraph', text: 'بنفس الفكرة، ممكن تعمل قواميس ومجموعات بطريقة مختصرة:'},
      { type: 'code', language: 'python', text: '# Dictionary Comprehension\nsquares_dict = {x: x**2 for x in range(5)}\nprint(f"قاموس التربيعات: {squares_dict}") # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\n\n# Set Comprehension (بتعمل مجموعة فيها عناصر فريدة)\nunique_letters = {char.lower() for char in "BodCodeIsAwesome" if char.isalpha()}\nprint(f"الحروف الفريدة (صغيرة): {unique_letters}")' },
      { type: 'paragraph', text: 'الـ Comprehensions طريقة قوية ومحبوبة في بايثون عشان بتخلي الكود بتاعك أنضف وأقصر وممكن يكون أسرع في بعض الحالات.'}
    ],
    quiz: [
      { id: 'q_lc_1', text: 'ما هي الفائدة الرئيسية من استخدام List Comprehensions؟', options: ['جعل الكود أطول', 'زيادة تعقيد الكود', 'كتابة كود أكثر إيجازًا وقراءة لإنشاء القوائم', 'تبطئ تنفيذ البرنامج'], correctAnswerIndex: 2, explanation: 'List Comprehensions تجعل الكود أكثر إيجازًا وأسهل في القراءة.' },
      { id: 'q_lc_2', text: 'أي من التالي هو بناء جملة صحيح لـ List Comprehension بسيطة؟', options: ['`[for item in iterable expression]`', '`(expression for item in iterable)`', '`{item for item in iterable: expression}`', '`[expression for item in iterable]`'], correctAnswerIndex: 3, explanation: 'الصيغة الأساسية هي `[expression for item in iterable]`.' },
      { id: 'q_lc_3', text: 'ماذا سيكون ناتج `[x * 2 for x in [1, 2, 3] if x % 2 == 0]`؟', options: ['`[2, 4, 6]`', '`[4]`', '`[2]`', '`[1, 2, 3, 2, 4, 6]`'], correctAnswerIndex: 1, explanation: 'الشرط `x % 2 == 0` يتحقق فقط للرقم 2. ثم يتم ضربه في 2 ليصبح الناتج `[4]`.' },
      { id: 'q_lc_4', text: 'هل يمكن استخدام تعبير شرطي (if/else) داخل الـ expression في List Comprehension؟', options: ['نعم، باستخدام `[value_if_true if condition else value_if_false for item in iterable]`', 'لا، هذا غير ممكن', 'فقط إذا كانت القائمة تحتوي على أرقام', 'فقط مع Set Comprehensions'], correctAnswerIndex: 0, explanation: 'نعم، يمكن استخدام تعبير شرطي في جزء الـ `expression` مثل `[x if x > 0 else 0 for x in numbers]`.' },
      { id: 'q_lc_5', text: 'لإنشاء Set comprehension، أي نوع من الأقواس تستخدم؟', options: ['`[]` (مربعة)', '`()` (دائرية)', '`{}` (معقوفة)', '`< >` (زاوية)'], correctAnswerIndex: 2, explanation: 'Set comprehensions (وكذلك Dictionary comprehensions) تستخدم الأقواس المعقوفة `{}`.' }
    ]
  },
  {
    id: 'l2-lesson-4',
    slug: 'lambda-map-filter',
    title: 'الدوال المجهولة `lambda` مع `map` و `filter`',
    description: 'اكتشف قوة دوال `lambda` الصغيرة والمجهولة، وكيفية استخدامها مع دوال `map` و `filter` لمعالجة البيانات بكفاءة.',
    content: [
      { type: 'heading', text: 'الدوال السريعة: `lambda`, `map`, و `filter`' },
      { type: 'paragraph', text: 'في بايثون، ساعات بنحتاج نعمل دالة بسيطة بتعمل حاجة واحدة ومش هنستخدمها غير في مكان واحد بس. بدل ما نعمل دالة كاملة بـ `def` واسم وكده، ممكن نستخدم "دالة لامدا" (Lambda Function). دالة لامدا هي دالة صغيرة، "مجهولة الاسم" (Anonymous)، بتتكتب في سطر واحد، وبترجع نتيجة تعبير (expression) واحد بس.' },
      { type: 'subheading', text: '1. دوال `lambda`:'},
      { type: 'paragraph', text: 'البناء بتاعها بيكون كده: `lambda arguments: expression`.'},
      { type: 'list', text:'', items:[
        '`lambda`: الكلمة المفتاحية اللي بتعرف إن دي دالة لامدا.',
        '`arguments`: المعاملات (parameters) اللي الدالة بتاخدها، ممكن تكون واحد أو أكتر، بتفصل بينهم بفاصلة (زي `x`, `x, y`).',
        '`expression`: تعبير واحد بس بيتم حسابه وإرجاع قيمته. مينفعش تحط أوامر متعددة أو جمل `if` معقدة هنا (بس ممكن تستخدم تعبير شرطي بسيط).'
      ]},
      { type: 'code', language: 'python', text: '# دالة لامدا بسيطة بتاخد معامل واحد وبتزود عليه واحد\nadd_one = lambda x: x + 1\nprint(add_one(5))  # الناتج: 6\n\n# دالة لامدا بتاخد معاملين وبترجع مجموعهم\nsum_two = lambda a, b: a + b\nprint(sum_two(10, 20)) # الناتج: 30\n\n# ممكن نستخدمها مباشرة من غير ما نخزنها في متغير (بس ده مش شائع أوي إلا مع دوال تانية)\nprint((lambda x, y: x * y)(4, 5)) # الناتج: 20' },
      { type: 'paragraph', text: 'أكبر فايدة لدوال لامدا بتظهر لما بنستخدمها مع دوال تانية بتقبل دوال كـ arguments، زي `map` و `filter` و `sorted`.'},
      { type: 'subheading', text: '2. دالة `map()`:' },
      { type: 'paragraph', text: 'دالة `map(function, iterable)` دي بتاخد دالة معينة (`function`) ومجموعة بيانات قابلة للتكرار (`iterable` زي قايمة أو tuple). وظيفتها إنها بتطبق الدالة دي على "كل عنصر" من عناصر الـ iterable، وبترجع "مُكرِّر" (iterator) فيه النتايج الجديدة. عشان نشوف النتايج دي كقايمة، لازم نحول المُكرِّر ده لقايمة باستخدام `list()`.' },
      { type: 'code', language: 'python', text: 'numbers = [1, 2, 3, 4, 5]\n\n# عايزين نعمل قايمة جديدة فيها تربيع كل رقم في القايمة الأصلية\n# باستخدام دالة عادية\ndef square(n):\n    return n**2\nsquared_numbers_loop = list(map(square, numbers))\nprint(f"باستخدام دالة عادية: {squared_numbers_loop}") # [1, 4, 9, 16, 25]\n\n# باستخدام دالة لامدا مع map (أكثر اختصاراً)\nsquared_numbers_lambda = list(map(lambda x: x**2, numbers))\nprint(f"باستخدام لامدا: {squared_numbers_lambda}") # [1, 4, 9, 16, 25]\n\nnames = ["أحمد", "علي", "سارة"]\nuppercased_names = list(map(str.upper, names)) # ممكن نمرر دوال مدمجة زي str.upper\nprint(uppercased_names) # [\'أَحْمَد\', \'عَلِي\', \'سَارَة\'] (لاحظ إنها قلبت الحروف العربية لحروف متصلة في بعض الأنظمة)' },
      { type: 'subheading', text: '3. دالة `filter()`:' },
      { type: 'paragraph', text: 'دالة `filter(function, iterable)` دي برضه بتاخد دالة ومجموعة بيانات. الدالة اللي بنمررها لـ `filter` لازم تكون دالة بترجع قيمة منطقية (`True` أو `False`). وظيفة `filter` إنها بتمر على كل عنصر في الـ iterable، وبتطبق عليه الدالة. لو الدالة رجعت `True` للعنصر ده، العنصر بيعدي وبيبقى جزء من الناتج. لو رجعت `False`، العنصر بيتم تجاهله. `filter` برضه بترجع مُكرِّر، فبنحتاج نحوله لقايمة أو أي هيكل تاني لو عايزين نشوف العناصر.' },
      { type: 'code', language: 'python', text: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\n# عايزين نفلتر الأرقام الزوجية بس\n# باستخدام دالة عادية\ndef is_even(n):\n    return n % 2 == 0\neven_numbers_loop = list(filter(is_even, numbers))\nprint(f"الأرقام الزوجية (دالة عادية): {even_numbers_loop}") # [2, 4, 6, 8, 10]\n\n# باستخدام دالة لامدا مع filter\neven_numbers_lambda = list(filter(lambda x: x % 2 == 0, numbers))\nprint(f"الأرقام الزوجية (لامدا): {even_numbers_lambda}") # [2, 4, 6, 8, 10]\n\n# مثال تاني: فلترة الكلمات اللي طولها أكبر من 3 حروف\nwords = ["بيت", "سيارة", "قط", "كمبيوتر", "شمس"]\nlong_words = list(filter(lambda w: len(w) > 3, words))\nprint(long_words) # [\'سيارة\', \'كمبيوتر\']' },
      { type: 'paragraph', text: 'دوال `lambda`, `map`, و `filter` أدوات قوية جداً بتساعدك تكتب كود وظيفي (Functional Style) أكتر في بايثون. بيخلوا الكود بتاعك مختصر وواضح لما بتكون بتعمل عمليات بسيطة على مجموعات بيانات. ممكن كمان تجمعهم مع List Comprehensions عشان تعمل حاجات معقدة بشكل أنيق.'}
    ],
    quiz: [
      { id: 'q_lmf_1', text: 'ما هي دالة lambda في بايثون؟', options: ['دالة كبيرة متعددة الأسطر', 'دالة مجهولة وصغيرة يمكن تعريفها في سطر واحد', 'اسم آخر لدالة `print`', 'طريقة لإنشاء كلاس'], correctAnswerIndex: 1, explanation: 'دوال lambda هي دوال صغيرة ومجهولة (بدون اسم رسمي) تستخدم عادة لعمليات بسيطة.' },
      { id: 'q_lmf_2', text: 'ماذا تفعل دالة `map(function, iterable)`؟', options: ['تقوم بتصفية عناصر الـ iterable بناءً على الـ function', 'تقوم بتطبيق الـ function على كل عنصر في الـ iterable وتعيد النتائج (كمُكرِّر)', 'تجمع كل عناصر الـ iterable في قيمة واحدة', 'تعيد الـ iterable كما هو'], correctAnswerIndex: 1, explanation: 'دالة `map` تطبق دالة معينة على كل عنصر من عناصر iterable وتعيد مُكرِّرًا بالنتائج.' },
      { id: 'q_lmf_3', text: 'ماذا سيكون ناتج `list(filter(lambda x: x > 2, [1, 2, 3, 4, 0]))`؟', options: ['`[1, 2, 0]`', '`[3, 4]`', '`[False, False, True, True, False]`', '`[1, 2, 3, 4, 0]`'], correctAnswerIndex: 1, explanation: '`filter` ستعيد العناصر التي يكون الشرط (`x > 2`) لها `True`.' },
      { id: 'q_lmf_4', text: 'ما هو بناء جملة دالة lambda بسيطة تأخذ معاملين `x` و `y` وتعيد مجموعهما؟', options: ['`def lambda(x, y): return x + y`', '`lambda x, y: x + y`', '`function (x, y) => x + y`', '`lambda (x, y) return x + y`'], correctAnswerIndex: 1, explanation: 'الصيغة الصحيحة هي `lambda arguments: expression`.' },
      { id: 'q_lmf_5', text: 'هل يمكن لدالة lambda أن تحتوي على أكثر من تعبير (expression) واحد؟', options: ['نعم، يمكن أن تحتوي على عدة تعبيرات مفصولة بفاصلة منقوطة', 'لا، دالة lambda يجب أن تحتوي على تعبير واحد فقط', 'نعم، إذا تم استخدام كلمة `return`', 'فقط إذا لم تأخذ أي معاملات'], correctAnswerIndex: 1, explanation: 'دوال lambda مصممة لتكون بسيطة ومقتصرة على تعبير واحد. القيمة الناتجة عن هذا التعبير هي التي يتم إرجاعها.' }
    ]
  },
  {
    id: 'l2-lesson-5',
    slug: 'working-with-json',
    title: 'التعامل مع بيانات JSON: قراءة وكتابة',
    description: 'تعلم كيفية التعامل مع تنسيق JSON الشهير في بايثون، بما في ذلك قراءة ملفات JSON وتحويل بيانات بايثون إلى JSON.',
    content: [
      { type: 'heading', text: 'لغة البيانات العالمية: التعامل مع JSON' },
      { type: 'paragraph', text: 'JSON (بتتنطق "جيسون" أو "جايسون"، واختصار لـ JavaScript Object Notation) هو تنسيق خفيف جداً ومشهور لتبادل البيانات بين البرامج، خصوصاً على الويب. الناس بتحبه عشان سهل القراءة للبشر وسهل للكمبيوتر إنه يحلله (parse) ويعمله (generate). بايثون عنده موديول مدمج اسمه `json` مخصوص عشان تتعامل مع البيانات دي.' },
      { type: 'code', language: 'python', text: 'import json' },
      { type: 'subheading', text: 'تحويل بيانات بايثون إلى نص JSON (Serialization/Encoding):' },
      { type: 'paragraph', text: 'لو عندك بيانات في بايثون (زي قاموس أو قايمة) وعايز تحولها لنص بصيغة JSON عشان تبعتها لـ API أو تحفظها في ملف، بتستخدم دالة `json.dumps()` (الـ "s" في الآخر اختصار لـ string).'},
      { type: 'code', language: 'python', text: 'data_dict = {\n    "name": "Bod Code Course",\n    "students": 250,\n    "topics": ["Python Basics", "Data Structures", "OOP"],\n    "is_active": True,\n    "instructor": None # None في بايثون بتتحول لـ null في JSON\n}\n\n# تحويل القاموس لنص JSON\njson_string = json.dumps(data_dict)\nprint("JSON String (مضغوط):")\nprint(json_string)\n\n# ممكن نخليه شكله منظم أكتر (pretty-print) باستخدام indent\n# و ensure_ascii=False عشان الحروف العربية متتحولش لرموز غريبة\nformatted_json_string = json.dumps(data_dict, indent=4, ensure_ascii=False, sort_keys=True)\nprint("\\nJSON String (منظم ومع دعم عربي):")\nprint(formatted_json_string)' },
      { type: 'subheading', text: 'تحويل نص JSON إلى بيانات بايثون (Deserialization/Decoding):' },
      { type: 'paragraph', text: 'لو عندك نص بصيغة JSON (مثلاً جالك من API أو قريته من ملف) وعايز تحوله لهيكل بيانات بايثون (عادةً قاموس أو قايمة)، بتستخدم دالة `json.loads()` (الـ "s" هنا برضه اختصار لـ string).'},
      { type: 'code', language: 'python', text: 'json_text_from_api = \'{"title": "درس جديد في بايثون", "duration_minutes": 60, "published": true, "tags": ["python", "intermediate"]}\'\n\npython_data = json.loads(json_text_from_api)\n\nprint("\\nبيانات بايثون بعد التحويل:")\nprint(python_data)\nprint(f"عنوان الدرس: {python_data[\'title\']}")\nprint(f"أول تاج: {python_data[\'tags\'][0]}")' },
      { type: 'subheading', text: 'التعامل مع ملفات JSON:' },
      { type: 'paragraph', text: 'موديول `json` بيوفر كمان دالتين عشان تتعامل مع ملفات JSON مباشرة:'},
      { type: 'list', text: '', items:[
        '`json.dump(data, file_object, indent=4, ensure_ascii=False)`: عشان تكتب بيانات بايثون (زي قاموس) في ملف بصيغة JSON. بتاخد البيانات وكائن الملف (file object) اللي فتحته للكتابة.',
        '`json.load(file_object)`: عشان تقرا بيانات JSON من ملف وتحولها لبيانات بايثون. بتاخد كائن الملف اللي فتحته للقراءة.'
      ]},
      { type: 'code', language: 'python', text: '# بيانات عايزين نحفظها في ملف JSON\nconfig_data = {\n    "app_name": "My BodCode Editor",\n    "version": "1.2.0",\n    "settings": {\n        "theme": "dark",\n        "font_size": 14\n    }\n}\n\nfile_path = "config.json"\n\n# كتابة البيانات في ملف JSON\ntry:\n    with open(file_path, "w", encoding="utf-8") as f_out:\n        json.dump(config_data, f_out, indent=4, ensure_ascii=False)\n    print(f"\\nتم حفظ الإعدادات في ملف \'{file_path}\'")\nexcept IOError as e:\n    print(f"حصل خطأ أثناء الكتابة للملف: {e}")\n\n# قراءة البيانات من ملف JSON\ntry:\n    with open(file_path, "r", encoding="utf-8") as f_in:\n        loaded_config = json.load(f_in)\n    print("\\nالإعدادات اللي قريناها من الملف:")\n    print(loaded_config)\n    print(f"اسم التطبيق من الملف: {loaded_config[\'app_name\']}")\n    print(f"حجم الخط: {loaded_config[\'settings\'][\'font_size\']}")\nexcept FileNotFoundError:\n    print(f"الملف \'{file_path}\' مش موجود.")\nexcept json.JSONDecodeError as e:\n    print(f"الملف \'{file_path}\' مش بصيغة JSON سليمة: {e}")\nexcept IOError as e:\n    print(f"حصل خطأ أثناء القراءة من الملف: {e}")' },
      { type: 'paragraph', text: 'تنسيق JSON بسيط جداً ومرن. أنواع البيانات الأساسية في JSON هي النصوص (strings)، الأرقام (numbers)، القيم المنطقية (booleans - `true`/`false`)، الكائنات (objects - اللي بتتحول لقواميس بايثون)، المصفوفات (arrays - اللي بتتحول لقوايم بايثون)، والقيمة `null` (اللي بتتحول لـ `None` في بايثون). التعامل معاه مهارة أساسية لأي مبرمج بايثون بيشتغل مع الويب أو بيتبادل بيانات بين أنظمة مختلفة.'}
    ],
    quiz: [
      { id: 'q_json_1', text: 'ما هي الوحدة (module) التي توفرها بايثون للتعامل مع بيانات JSON؟', options: ['`xml`', '`json`', '`pickle`', '`csv`'], correctAnswerIndex: 1, explanation: 'وحدة `json` هي الوحدة القياسية في بايثون للتعامل مع JSON.' },
      { id: 'q_json_2', text: 'أي دالة تستخدم لتحويل قاموس بايثون إلى سلسلة نصية بتنسيق JSON؟', options: ['`json.load()`', '`json.loads()`', '`json.dump()`', '`json.dumps()`'], correctAnswerIndex: 3, explanation: '`json.dumps()` (dump string) تحول كائن بايثون إلى سلسلة JSON.' },
      { id: 'q_json_3', text: 'عند قراءة بيانات JSON من ملف، أي دالة تستخدم عادةً؟', options: ['`json.read_file()`', '`json.load()`', '`json.loads()`', '`json.get_from_file()`'], correctAnswerIndex: 1, explanation: '`json.load()` تستخدم لتحميل (تحويل) بيانات JSON من كائن يشبه الملف (مثل ملف مفتوح).' },
      { id: 'q_json_4', text: 'ما هو الغرض من المعامل `ensure_ascii=False` عند استخدام `json.dumps()` مع نصوص عربية؟', options: ['للتأكد من أن كل الحروف يتم تحويلها إلى ASCII', 'لمنع تحويل الحروف غير الـ ASCII (مثل العربية) إلى تسلسلات \\uXXXX والسماح بظهورها كما هي', 'لزيادة سرعة التحويل', 'لتجاهل النصوص العربية بالكامل'], correctAnswerIndex: 1, explanation: '`ensure_ascii=False` يسمح بظهور الحروف غير الـ ASCII (مثل العربية) مباشرة في سلسلة JSON الناتجة بدلاً من ترميزها.' },
      { id: 'q_json_5', text: 'إذا كان لديك سلسلة JSON: `\'{"name": "Book", "pages": 100}\'`، فما نوع كائن بايثون الذي ستحصل عليه بعد استخدام `json.loads()`؟', options: ['List (قائمة)', 'Tuple (صف)', 'Dictionary (قاموس)', 'Set (مجموعة)'], correctAnswerIndex: 2, explanation: 'كائنات JSON (المحاطة بـ `{}`) يتم تحويلها إلى قواميس بايثون. مصفوفات JSON (المحاطة بـ `[]`) يتم تحويلها إلى قوائم بايثون.' }
    ]
  },
  {
    id: 'l2-lesson-6',
    slug: 'file-handling',
    title: 'التعامل مع الملفات: قراءة وكتابة البيانات',
    description: 'تعلم كيف يقرأ برنامجك من الملفات ويكتب فيها، وهي مهارة أساسية لتخزين البيانات واسترجاعها.',
    content: [
      { type: 'heading', text: 'كنز البيانات الدائم: التعامل مع الملفات' },
      { type: 'paragraph', text: 'في كتير من الأحيان، بنحتاج برامجنا تحفظ بيانات بشكل دائم عشان نقدر نرجع لها بعدين حتى لو قفلنا البرنامج، أو نقرا بيانات موجودة بالفعل من ملفات على الجهاز. بايثون بتقدملك طرق سهلة جداً عشان تتعامل مع الملفات دي.' },
      { type: 'subheading', text: '1. فتح الملف باستخدام `open()`:'},
      { type: 'paragraph', text: 'أول خطوة عشان تتعامل مع ملف هي إنك "تفتحه". بنستخدم دالة `open()` المدمجة. الدالة دي بتاخد على الأقل معاملين:'},
      { type: 'list', text:'', items:[
        '**اسم الملف (File Path):** ده مسار الملف اللي عايز تفتحه (مثلاً `"my_document.txt"` أو `"data/report.csv"`).',
        '**وضع الفتح (Mode):** ده بيحدد إنت عايز تعمل إيه بالملف ده. أشهر الأوضاع هي:',
        '  - `\'r\'` (Read - للقراءة فقط): ده الوضع الافتراضي. لو حاولت تكتب في الملف وهو مفتوح بالوضع ده هيحصل خطأ. لو الملف مش موجود، هيحصل خطأ `FileNotFoundError`.',
        '  - `\'w\'` (Write - للكتابة فقط): لو الملف موجود، "هيمسح كل اللي فيه" ويبدأ يكتب من الأول. لو الملف مش موجود، هيعمل ملف جديد بالاسم ده. لو حاولت تقرا من الملف وهو مفتوح بالوضع ده هيحصل خطأ.',
        '  - `\'a\'` (Append - للإضافة فقط): لو الملف موجود، الكتابة هتبدأ من "آخر الملف" من غير ما تمسح اللي كان موجود. لو الملف مش موجود، هيعمل ملف جديد. لو حاولت تقرا هيحصل خطأ.',
        '  - `\'r+\'` (Read and Write - للقراءة والكتابة): الملف لازم يكون موجود. ممكن تقرا منه وتكتب فيه.',
        '  - `\'w+\'` (Write and Read - للكتابة والقراءة): زي `w` بس ممكن تقرا منه بعد ما تكتب.',
        '  - `\'a+\'` (Append and Read - للإضافة والقراءة): زي `a` بس ممكن تقرا منه.',
        '  - `\'rb\'`, `\'wb\'`, `\'ab\'`, etc.: الأوضاع اللي فيها حرف `b` (binary) بتستخدم للتعامل مع الملفات الثنائية (زي الصور أو الملفات التنفيذية) مش الملفات النصية.'
      ]},
      { type: 'paragraph', text: 'دالة `open()` بترجع "كائن ملف" (File Object) بنستخدمه عشان نعمل عمليات القراءة والكتابة.'},
      { type: 'code', language: 'python', text: '# مثال لفتح ملف للقراءة\n# try:\n#     file_object = open("example.txt", "r", encoding="utf-8") # encoding مهم للملفات العربية\n#     # ... نعمل عمليات على الملف ...\n# finally:\n#     if file_object:\n#         file_object.close() # مهم جداً نقفل الملف بعد ما نخلص' },
      { type: 'subheading', text: '2. استخدام `with open(...)` (الطريقة المفضلة):'},
      { type: 'paragraph', text: 'الطريقة اللي فوق بتاعة `try...finally` عشان تقفل الملف شغالة، بس ممكن تكون مملة شوية وممكن ننسى نقفل الملف. بايثون بتقدملنا طريقة أنضف وأأمن باستخدام جملة `with`. جملة `with` بتضمن إن الملف هيتقفل تلقائياً بعد ما البلوك بتاعها يخلص، حتى لو حصل خطأ جوه البلوك!'},
      { type: 'code', language: 'python', text: 'try:\n    with open("example.txt", "r", encoding="utf-8") as f_obj: # f_obj هو كائن الملف\n        # الكود اللي بيتعامل مع الملف بيكون هنا\n        content = f_obj.read()\n        print("محتوى الملف كامل:")\n        print(content)\n    # أول ما نخرج من البلوك ده، الملف f_obj بيتقفل لوحده\nexcept FileNotFoundError:\n    print("الملف example.txt مش موجود!")\nexcept Exception as e:\n    print(f"حصل خطأ تاني: {e}")' },
      { type: 'subheading', text: '3. القراءة من الملفات النصية:'},
      { type: 'list', text: 'كائن الملف بيوفر كذا دالة للقراءة:', items:[
        '`file.read(size)`: بتقرا `size` عدد من الحروف (أو البايتات لو ملف ثنائي). لو محددتش `size` أو كانت قيمة سالبة، بتقرا الملف كله مرة واحدة (خلي بالك لو الملف كبير جداً ده ممكن يستهلك ذاكرة كتير).',
        '`file.readline()`: بتقرا سطر واحد بس من الملف، لحد ما توصل لرمز السطر الجديد (`\\n`) أو نهاية الملف.',
        '`file.readlines()`: بتقرا كل السطور اللي فاضلة في الملف وبترجعهم كقايمة (list) من النصوص، كل نص فيها بيمثل سطر (وبيكون معاه رمز `\\n` في آخره).',
        '**الطريقة الأفضل لقراءة الملف سطر بسطر (خصوصاً للملفات الكبيرة):** إنك تعمل حلقة `for` على كائن الملف نفسه. بايثون هيتعامل مع الموضوع ده بكفاءة ويجيبلك كل سطر لوحده.'
      ]},
      { type: 'code', language: 'python', text: '# نعمل ملف الأول عشان نقراه\nwith open("sample_read.txt", "w", encoding="utf-8") as f_write:\n    f_write.write("السطر الأول من الملف.\\n")\n    f_write.write("ده السطر الثاني.\\n")\n    f_write.write("وهنا السطر الأخير خالص.")\n\nprint("\\n--- قراءة الملف سطر بسطر (الطريقة المفضلة) ---")\ntry:\n    with open("sample_read.txt", "r", encoding="utf-8") as f:\n        for line_number, line_content in enumerate(f, 1):\n            print(f"سطر {line_number}: {line_content.strip()}") # .strip() بتشيل المسافات الزيادة و \n من الأطراف\nexcept FileNotFoundError:\n    print("ملف sample_read.txt مش لاقيينه.")' },
      { type: 'subheading', text: '4. الكتابة في الملفات النصية:'},
      { type: 'list', text: 'بنستخدم الدوال دي:', items:[
        '`file.write(string)`: بتكتب النص `string` في الملف. مش بتضيف سطر جديد (`\\n`) في الآخر لوحدها، لازم تضيفه إنت لو عايزه.',
        '`file.writelines(list_of_strings)`: بتاخد قايمة من النصوص وبتكتبهم كلهم ورا بعض في الملف. برضه مش بتضيف سطور جديدة تلقائياً بين النصوص.'
      ]},
      { type: 'code', language: 'python', text: 'lines_to_write = [\n    "أهلاً بك في ملف جديد.\\n",\n    "تم إنشاؤه بواسطة Bod Code.\\n",\n    "بايثون ممتع جداً!\\n"\n]\n\ntry:\n    with open("new_output.txt", "w", encoding="utf-8") as f_out:\n        f_out.write("ده أول سطر كتبناه لوحدنا.\\n")\n        f_out.writelines(lines_to_write)\n    print("\\nتمت الكتابة في ملف new_output.txt بنجاح.")\n\n    # نجرب وضع الإضافة \'a\'\n    with open("new_output.txt", "a", encoding="utf-8") as f_append:\n        f_append.write("سطر إضافي تم إلحاقه في الآخر.\\n")\n    print("تم إضافة سطر جديد للملف.")\nexcept Exception as e:\n    print(f"حصل خطأ أثناء الكتابة: {e}")' },
      { type: 'subheading', text: 'تحديد مكان المؤشر (Seeking - أقل استخداماً مع الملفات النصية):'},
      { type: 'paragraph', text: 'كائن الملف بيكون عنده مؤشر داخلي بيقول هو واقف فين في الملف. ممكن تستخدم دالة `file.seek(offset, whence)` عشان تحرك المؤشر ده. `offset` هو عدد البايتات اللي عايز تتحركها، و `whence` بتحدد هتبدأ منين (0 من بداية الملف، 1 من المكان الحالي، 2 من نهاية الملف). ودالة `file.tell()` بترجعلك مكان المؤشر الحالي. دي بتكون مفيدة أكتر مع الملفات الثنائية.'},
      { type: 'paragraph', text: 'التعامل مع الملفات مهارة أساسية جداً. سواء بتقرا ملفات إعدادات، أو بتسجل نتائج، أو بتعالج بيانات، هتحتاج تتعامل مع الملفات كتير في شغلك كمبرمج بايثون.'}
    ],
    quiz: [
      { id: 'q_fh_1', text: 'ما هو وضع الفتح (mode) الذي تستخدمه إذا أردت القراءة من ملف وإذا لم يكن الملف موجودًا يحدث خطأ؟', options: ['`"w"`', '`"r"`', '`"a"`', '`"r+"`'], correctAnswerIndex: 1, explanation: 'الوضع `"r"` (read) هو للقراءة فقط، ويسبب خطأ إذا لم يكن الملف موجودًا.' },
      { id: 'q_fh_2', text: 'ماذا تفعل الدالة `file.write(text)`؟', options: ['تقرأ نصًا من الملف', 'تكتب النص `text` في الملف', 'تحذف الملف', 'تغلق الملف'], correctAnswerIndex: 1, explanation: '`file.write(text)` تقوم بكتابة السلسلة النصية `text` في الملف المفتوح.' },
      { id: 'q_fh_3', text: 'ما هي الفائدة الرئيسية لاستخدام جملة `with open(...) as f:` عند التعامل مع الملفات؟', options: ['تجعل الملف يفتح بشكل أسرع', 'تضمن أن الملف سيتم إغلاقه تلقائيًا حتى لو حدث خطأ', 'تسمح بكتابة أنواع بيانات غير النصوص', 'تقوم بضغط الملف تلقائيًا'], correctAnswerIndex: 1, explanation: 'جملة `with` تضمن إغلاق الملف بشكل صحيح وآمن (cleanup) حتى في حالة حدوث استثناءات.' },
      { id: 'q_fh_4', text: 'إذا فتحت ملفًا للكتابة بالوضع `"w"` وكان الملف موجودًا بالفعل وبه محتوى، ماذا سيحدث لمحتواه القديم؟', options: ['سيتم إضافة المحتوى الجديد إلى نهاية المحتوى القديم', 'سيحدث خطأ ولن تتم الكتابة', 'سيتم مسح المحتوى القديم بالكامل وكتابة المحتوى الجديد من البداية', 'سيتم سؤالك إذا كنت تريد استبدال المحتوى'], correctAnswerIndex: 2, explanation: 'الوضع `"w"` (write) يقوم بمسح (overwrite) محتويات الملف إذا كان موجودًا، أو ينشئ ملفًا جديدًا إذا لم يكن موجودًا.' },
      { id: 'q_fh_5', text: 'ما هو الترميز (encoding) الذي يُنصح باستخدامه بشكل عام عند التعامل مع ملفات نصية تحتوي على اللغة العربية في بايثون؟', options: ['`"ascii"`', '`"latin-1"`', '`"utf-8"`', '`"cp1252"`'], correctAnswerIndex: 2, explanation: '`"utf-8"` هو ترميز قياسي يدعم معظم اللغات بما في ذلك العربية، وهو الخيار المفضل للملفات النصية.' }
    ]
  },
  {
    id: 'l2-lesson-7',
    slug: 'exception-handling',
    title: 'مواجهة المفاجآت: التعامل مع الأخطاء والاستثناءات',
    description: 'تعلم كيف تجعل برنامجك أكثر قوة ويتعامل برشاقة مع الأخطاء غير المتوقعة (الاستثناءات).',
    content: [
      { type: 'heading', text: 'لما البرنامج يكح: الأخطاء والاستثناءات (Exception Handling)' },
      { type: 'paragraph', text: 'مفيش برنامج مثالي! الأخطاء جزء طبيعي من عملية البرمجة. فيه نوعين من الأخطاء ممكن تقابلهم:'},
      { type: 'list', text: '', items:[
        '**الأخطاء النحوية (Syntax Errors):** دي أخطاء في كتابة الكود نفسه، زي إنك تنسى نقطتين `:` بعد `if` أو تكتب اسم متغير غلط. بايثون بيكتشف الأخطاء دي قبل ما البرنامج يشتغل أصلاً ومش بيخليه يشتغل لحد ما تصلحها.',
        '**الاستثناءات (Exceptions) أو أخطاء وقت التشغيل (Runtime Errors):** دي أخطاء بتحصل والبرنامج شغال. الكود بيكون مكتوب صح نحوياً، بس بيحصل موقف غير متوقع بيخلي البرنامج مش قادر يكمل. مثلاً، لو حاولت تقسم على صفر، أو تفتح ملف مش موجود، أو تحول نص مفيهوش أرقام لرقم. لو متعاملتش مع الاستثناءات دي، البرنامج هيقف فجأة ويطلع رسالة خطأ (Traceback) للمستخدم.'
      ]},
      { type: 'paragraph', text: 'عشان نخلي برامجنا قوية ومتقفش فجأة في وش المستخدم، بايثون بيوفرلنا طريقة للتعامل مع الاستثناءات دي بشكل أنيق باستخدام جملة `try...except`.'},
      { type: 'subheading', text: '1. جملة `try...except` الأساسية:' },
      { type: 'paragraph', text: 'الفكرة بسيطة: بنحط الكود اللي "ممكن" يعمل استثناء جوه بلوك `try`. لو حصل استثناء جوه البلوك ده، بايثون هيوقف تنفيذ اللي فاضل في `try` وهيدور على بلوك `except` مناسب يتعامل مع نوع الاستثناء اللي حصل.'},
      { type: 'code', language: 'python', text: 'try:\n    # الكود اللي ممكن يسبب مشكلة\n    x = int(input("دخل رقم عشان نقسم 10 عليه: "))\n    result = 10 / x\n    print(f"نتيجة قسمة 10 على {x} هي: {result}")\nexcept ZeroDivisionError: # لو حصل خطأ القسمة على صفر\n    print("مينفعش تقسم على صفر يا صاحبي!")\nexcept ValueError: # لو المستخدم دخل حاجة مش رقم (فـ int() هتعمل ValueError)\n    print("القيمة اللي دخلتها دي مش رقم صحيح أصلاً!")\n\nprint("البرنامج كمل شغله عادي بعد الـ try-except.")' },
      { type: 'subheading', text: '2. التعامل مع أنواع مختلفة من الاستثناءات:' },
      { type: 'paragraph', text: 'ممكن يكون عندك أكتر من بلوك `except` عشان تتعامل مع كل نوع استثناء بشكل مختلف. بايثون هيختار أول بلوك `except` بيطابق نوع الاستثناء اللي حصل.'},
      { type: 'paragraph', text: 'ممكن كمان تعمل بلوك `except` عام يمسك أي نوع استثناء معرفتوش بشكل خاص، وده بيكون باستخدام `except Exception as e:`. المتغير `e` هنا هيحتوي على معلومات عن الاستثناء اللي حصل. بس خلي بالك، استخدام `except Exception` لوحده ممكن يخفي أخطاء مكنتش متوقعها، فالأفضل دايماً تحاول تتعامل مع أنواع الاستثناءات اللي إنت متوقعها بشكل محدد الأول.'},
      { type: 'code', language: 'python', text: 'numerator = 10\ndenominators = [2, 0, "a", 5]\n\nfor d in denominators:\n    try:\n        quotient = numerator / d\n        print(f"{numerator} / {d} = {quotient}")\n    except ZeroDivisionError:\n        print(f"لا يمكن القسمة على صفر ({d})")\n    except TypeError:\n        print(f"لا يمكن القسمة على نوع بيانات خاطئ ({d} من نوع {type(d).__name__})")\n    except Exception as general_error:\n        print(f"حصل خطأ غير متوقع آخر مع {d}: {general_error}")' },
      { type: 'subheading', text: '3. بلوك `else` مع `try...except`:' },
      { type: 'paragraph', text: 'ممكن تضيف بلوك `else` بعد كل بلوكات `except`. الكود اللي جوه `else` بيتنفذ "فقط" لو بلوك `try` خلص شغله كله من غير ما يحصل فيه أي استثناء.'},
      { type: 'code', language: 'python', text: 'try:\n    user_input = input("دخل رقم صحيح: ")\n    number = int(user_input)\nexcept ValueError:\n    print(f"\'{user_input}\' ده مش رقم صحيح.")\nelse:\n    # الكود ده هيتنفذ بس لو int(user_input) نجحت\n    print(f"الرقم اللي دخلته هو: {number}. شكراً!")' },
      { type: 'subheading', text: '4. بلوك `finally`:' },
      { type: 'paragraph', text: 'ساعات بنكون عايزين ننفذ جزء معين من الكود "في كل الأحوال"، سواء حصل استثناء أو محصلش، وسواء تم التعامل مع الاستثناء ده أو لأ. هنا بنستخدم بلوك `finally`. ده بيكون مفيد جداً لعمليات "التنظيف" (Cleanup) زي إنك تقفل ملف فتحته أو تقفل اتصال بقاعدة بيانات، عشان تضمن إن الموارد دي متفضلش مفتوحة.'},
      { type: 'code', language: 'python', text: 'file = None # نعرفه بره عشان نقدر نوصله في finally\ntry:\n    file_path = "my_data.txt"\n    file = open(file_path, "r", encoding="utf-8")\n    data = file.read()\n    print(f"محتوى الملف \'{file_path}\':\\n{data}")\nexcept FileNotFoundError:\n    print(f"الملف \'{file_path}\' مش موجود.")\nexcept Exception as e:\n    print(f"حصل خطأ أثناء التعامل مع الملف: {e}")\nfinally:\n    if file: # نتأكد إن الملف اتفتح أصلاً قبل ما نحاول نقفله\n        file.close()\n        print(f"الملف \'{file_path}\' تم إغلاقه (في finally).")\n    else:\n        print("مفيش ملف اتفتح عشان يتقفل (في finally).")' },
      { type: 'subheading', text: '5. إثارة الاستثناءات بنفسك (Raising Exceptions) باستخدام `raise`:' },
      { type: 'paragraph', text: 'مش بس بايثون هو اللي ممكن يعمل استثناءات. إنت كمان ممكن تثير استثناء بنفسك في الكود بتاعك لو حصل موقف معين إنت شايف إنه خطأ أو غير مسموح بيه. بنستخدم كلمة `raise` ومعاها نوع الاستثناء اللي عايزين نثيره (وممكن رسالة توضيحية).'},
      { type: 'code', language: 'python', text: 'def calculate_age(birth_year, current_year=2024):\n    if birth_year > current_year:\n        raise ValueError("سنة الميلاد مينفعش تكون بعد السنة الحالية!")\n    if birth_year < 1900:\n        raise ValueError("العمر ده كبير أوي، متأكد من سنة الميلاد؟")\n    return current_year - birth_year\n\ntry:\n    age1 = calculate_age(1990)\n    print(f"العمر الأول: {age1}")\n    age2 = calculate_age(2030) # هنا هيحصل ValueError\n    print(f"العمر الثاني: {age2}")\n    age3 = calculate_age(1850) # هنا برضه هيحصل ValueError\n    print(f"العمر الثالث: {age3}")\nexcept ValueError as ve:\n    print(f"خطأ في حساب العمر: {ve}")' },
      { type: 'paragraph', text: 'التعامل مع الاستثناءات بيخلي برامجك أكثر اعتمادية واحترافية. بيسمحلك تتوقع المشاكل اللي ممكن تحصل وتتعامل معاها بشكل متحكم فيه بدل ما البرنامج ينهار.'}
    ],
    quiz: [
      { id: 'q_eh_1', text: 'ما هو الغرض الأساسي من استخدام `try...except` في بايثون؟', options: ['لتسريع تنفيذ الكود', 'للتعامل مع الأخطاء النحوية (Syntax Errors)', 'للتعامل مع الاستثناءات (أخطاء وقت التشغيل) ومنع البرنامج من التوقف المفاجئ', 'لإنشاء دوال جديدة'], correctAnswerIndex: 2, explanation: '`try...except` يستخدم لالتقاط ومعالجة الاستثناءات التي تحدث أثناء تشغيل البرنامج.' },
      { id: 'q_eh_2', text: 'أي بلوك يتم تنفيذه إذا لم يحدث أي استثناء داخل بلوك `try` (بافتراض وجود `else`)؟', options: ['`except`', '`finally`', '`else`', 'لا يتم تنفيذ أي بلوك إضافي'], correctAnswerIndex: 2, explanation: 'بلوك `else` يتم تنفيذه فقط إذا لم يثر بلوك `try` أي استثناء.' },
      { id: 'q_eh_3', text: 'متى يتم تنفيذ الكود الموجود داخل بلوك `finally`؟', options: ['فقط إذا حدث استثناء', 'فقط إذا لم يحدث استثناء', 'دائمًا، سواء حدث استثناء أم لا', 'فقط إذا تم استخدام جملة `raise`'], correctAnswerIndex: 2, explanation: 'بلوك `finally` يتم تنفيذه دائمًا، مما يجعله مناسبًا لعمليات التنظيف مثل إغلاق الملفات.' },
      { id: 'q_eh_4', text: 'ماذا يحدث إذا حدث استثناء من نوع `TypeError` داخل بلوك `try`، ولم يكن هناك بلوك `except TypeError:` مخصص له، ولكن كان هناك بلوك `except Exception as e:`؟', options: ['سيتم تجاهل الاستثناء', 'سيتم التقاط الاستثناء بواسطة `except Exception as e:`', 'سيتوقف البرنامج فورًا دون تنفيذ أي بلوك `except`', 'سيتم تحويل `TypeError` إلى `Exception`'], correctAnswerIndex: 1, explanation: '`except Exception as e:` هو بلوك عام يمكنه التقاط أي نوع من الاستثناءات (التي ترث من `Exception`) إذا لم يتم التقاطها بواسطة بلوك `except` أكثر تحديدًا قبله.' },
      { id: 'q_eh_5', text: 'ما هي الكلمة المفتاحية المستخدمة لإثارة استثناء بشكل برمجي (يدوي) في بايثون؟', options: ['`throw`', '`exception`', '`error`', '`raise`'], correctAnswerIndex: 3, explanation: 'كلمة `raise` تستخدم لإثارة استثناء بشكل متعمد في الكود.' }
    ]
  },
  {
    id: 'l2-lesson-8',
    slug: 'modules-packages',
    title: 'تنظيم الكود المتقدم: الوحدات (Modules) والحزم (Packages)',
    description: 'تعلم كيفية تقسيم برنامجك إلى أجزاء (وحدات) قابلة لإعادة الاستخدام، واستخدام مكتبات بايثون.',
    content: [
      { type: 'heading', text: 'ترتيب دولاب الأكواد: الوحدات (Modules) والحزم (Packages)' },
      { type: 'paragraph', text: 'لما برامجك بتبدأ تكبر، مش من العملي إنك تحط كل الكود بتاعك في ملف واحد. الدنيا هتبقى زحمة وصعب تفهم أو تعدل حاجة. بايثون بيوفرلك طريقة لتنظيم الكود ده في "وحدات" (Modules) و "حزم" (Packages).' },
      { type: 'subheading', text: '1. الوحدات (Modules):' },
      { type: 'paragraph', text: 'الوحدة (Module) هي ببساطة ملف بايثون عادي بامتداد `.py` بيحتوي على دوال، أصناف، ومتغيرات إنت عملتها. الفايدة من الوحدة إنك ممكن "تستوردها" (Import) في ملف بايثون تاني وتستخدم الحاجات اللي متعرفة جواها. ده بيساعد على:'},
      { type: 'list', text:'', items:[
        '**إعادة استخدام الكود (Code Reusability):** لو عندك دالة مفيدة، ممكن تحطها في وحدة وتستوردها في أي مشروع تاني بدل ما تكتبها كل مرة.',
        '**تنظيم الكود (Organization):** بتقسم برنامجك لملفات أصغر كل ملف مسؤول عن جزء معين، فبيبقى أسهل في الفهم والصيانة.',
        '**تجنب تضارب الأسماء (Namespace Isolation):** لو عندك دالة اسمها `calculate` في وحدة، ودالة تانية بنفس الاسم في وحدة تانية، مش هيحصل لخبطة لأن كل واحدة فيهم بتكون في "مساحة أسماء" (Namespace) خاصة بالوحدة بتاعتها.'
      ]},
      { type: 'paragraph', text: 'عشان تستورد وحدة، بتستخدم كلمة `import`:'},
      { type: 'code', language: 'python', text: '# مثال: هنعمل ملف اسمه my_math_functions.py وجواه الدوال دي:\n# def add(x, y):\n#     return x + y\n# \n# def subtract(x, y):\n#     return x - y\n\n# في ملف تاني (مثلاً main.py) في نفس المجلد:\nimport my_math_functions # بنستورد الوحدة كلها\n\nresult1 = my_math_functions.add(10, 5) # لازم نستخدم اسم الوحدة قبل اسم الدالة\nresult2 = my_math_functions.subtract(10, 5)\nprint(f"الجمع: {result1}, الطرح: {result2}")\n\n# طريقة تانية: نستورد حاجات معينة بس من الوحدة\nfrom my_math_functions import add # دلوقتي نقدر نستخدم add مباشرة\nresult3 = add(20, 7)\nprint(f"جمع تاني: {result3}")\n\n# ممكن نستورد كل حاجة من الوحدة (بس دي مش طريقة مفضلة أوي لأنها ممكن تعمل تضارب أسماء)\n# from my_math_functions import *\n# result4 = subtract(50, 10)\n\n# ممكن ندي اسم مستعار (alias) للوحدة أو للحاجة اللي بنستوردها\nimport my_math_functions as mmf\nresult5 = mmf.add(100, 1)\n\nfrom my_math_functions import subtract as sub\nresult6 = sub(9, 4)' },
      { type: 'paragraph', text: 'بايثون بييجي معاه "مكتبة قياسية" (Standard Library) ضخمة جداً فيها وحدات كتير جاهزة ممكن تستخدمها علطول زي `math` (للعمليات الرياضية المتقدمة)، `random` (للأرقام العشوائية)، `datetime` (للتعامل مع الوقت والتاريخ)، `json` (للتعامل مع بيانات JSON)، `os` (للتعامل مع نظام التشغيل)، وغيرها كتير.'},
      { type: 'subheading', text: '2. الحزم (Packages):' },
      { type: 'paragraph', text: 'لما مشروعك بيكبر أكتر وبيبقى عندك وحدات كتير، ممكن تحتاج تنظم الوحدات دي نفسها. هنا بتيجي "الحزم" (Packages). الحزمة هي ببساطة "مجلد" (Folder) بيحتوي على وحدات بايثون (ملفات `.py`) وممكن كمان يحتوي على حزم فرعية (Sub-packages).' },
      { type: 'paragraph', text: 'عشان بايثون يعتبر المجلد ده حزمة، لازم يكون جواه ملف خاص اسمه `__init__.py`. الملف ده ممكن يكون فاضي خالص، أو ممكن يكون فيه كود بايثون بيشتغل أول ما الحزمة دي بتستورد. ممكن كمان تستخدمه عشان تحدد إيه الوحدات أو الأسماء اللي عايزها تكون متاحة مباشرة لما حد يعمل `from my_package import ...`.'},
      { type: 'code', language: 'text', text: '# مثال لهيكل حزمة:\n# my_project/\n# ├── main_script.py\n# └── my_package/            <-- دي الحزمة الرئيسية\n#     ├── __init__.py\n#     ├── module1.py\n#     ├── module2.py\n#     └── sub_package/       <-- دي حزمة فرعية\n#         ├── __init__.py\n#         └── module3.py' },
      { type: 'paragraph', text: 'لو افترضنا `module1.py` جواه دالة `func1()`، و `module3.py` جواه دالة `func3()`، ممكن نستوردهم في `main_script.py` كده:'},
      { type: 'code', language: 'python', text: '# في main_script.py\n\n# استيراد من وحدة جوه الحزمة الرئيسية\nfrom my_package import module1\nmodule1.func1()\n\n# أو نستورد الدالة مباشرة\nfrom my_package.module1 import func1\nfunc1()\n\n# استيراد من وحدة جوه حزمة فرعية\nfrom my_package.sub_package import module3\nmodule3.func3()\n\n# لو __init__.py بتاع my_package كان فيه مثلاً:\n# # في my_package/__init__.py\n# from .module1 import func1\n# from .sub_package.module3 import func3\n# \n# ساعتها في main_script.py ممكن نعمل:\n# from my_package import func1, func3\n# func1()\n# func3()' },
      { type: 'subheading', text: 'فائدة `if __name__ == "__main__":`'},
      { type: 'paragraph', text: 'كتير أوي هتشوف السطر ده في ملفات بايثون: `if __name__ == "__main__":`. إيه معناه؟'},
      { type: 'paragraph', text: 'بايثون بيدي متغير خاص اسمه `__name__` لكل ملف (وحدة). لو الملف ده هو الملف الرئيسي اللي إنت مشغله مباشرة من الترمنال (مثلاً `python my_script.py`)، قيمة `__name__` جوه الملف ده بتكون هي السلسلة النصية `"__main__"`. أما لو الملف ده تم استيراده كوحدة في ملف تاني، قيمة `__name__` جواه بتكون هي اسم الوحدة نفسها (اسم الملف من غير `.py`).'},
      { type: 'paragraph', text: 'فالشرط ده بيسمحلك تكتب كود معين يشتغل "فقط" لما الملف يتنفذ كبرنامج رئيسي، وميشتغلش لما الملف ده يتم استيراده كوحدة في مكان تاني. ده بيكون مفيد جداً لو عايز تحط مثلاً كود تجريبي أو أمثلة استخدام للدوال اللي في الوحدة بتاعتك، من غير ما الكود ده يشتغل كل مرة حد يستورد وحدتك.'},
      { type: 'code', language: 'python', text: '# في ملف اسمه my_utility_module.py\n\ndef useful_function():\n    print("دي دالة مفيدة جداً!")\n\nprint(f"قيمة __name__ في my_utility_module.py هي: {__name__}")\n\nif __name__ == "__main__":\n    print("الملف ده بيشتغل كبرنامج رئيسي!")\n    useful_function()\n    print("ده كود تجريبي مش هيشتغل لو حد عملي import.")\n\n# لو عملت import my_utility_module في ملف تاني، هيطبع قيمة __name__ ومش هينفذ اللي جوه الـ if.' },
      { type: 'paragraph', text: 'الوحدات والحزم أساسية لتنظيم المشاريع الكبيرة والقابلة للصيانة. بتخليك تبني مكتبات من الكود تقدر تستخدمها في أكتر من مكان، وبتخلي التعاون مع مبرمجين تانيين أسهل بكتير.'}
    ],
    quiz: [
      { id: 'q_mp_1', text: 'ما هو الملف الذي يجب أن يكون موجودًا داخل مجلد لكي يعتبره بايثون حزمة (Package)؟', options: ['`main.py`', '`__init__.py`', '`setup.py`', '`package.json`'], correctAnswerIndex: 1, explanation: 'ملف `__init__.py` (حتى لو فارغ) يشير إلى أن المجلد هو حزمة بايثون.' },
      { id: 'q_mp_2', text: 'إذا كان لديك وحدة اسمها `utils.py` وبها دالة `helper()`، كيف يمكنك استيراد الدالة واستخدامها مباشرة باسم `helper()`؟', options: ['`import utils; utils.helper()`', '`import utils.helper`', '`from utils import helper; helper()`', '`load utils.helper`'], correctAnswerIndex: 2, explanation: '`from utils import helper` يسمح باستدعاء `helper()` مباشرة.' },
      { id: 'q_mp_3', text: 'ما هي الفائدة الرئيسية من استخدام `if __name__ == "__main__":` في سكربت بايثون؟', options: ['لتسريع تنفيذ الكود', 'للسماح بتنفيذ جزء من الكود فقط عندما يتم تشغيل الملف مباشرة وليس عندما يتم استيراده كوحدة', 'لتعريف متغيرات عامة فقط', 'لإجبار بايثون على استخدام إصدار معين'], correctAnswerIndex: 1, explanation: 'هذا الشرط يسمح بتمييز ما إذا كان الملف يتم تشغيله كبرنامج رئيسي أو يتم استيراده، مما يمكن من وضع كود اختبار أو تشغيل خاص بالملف.' },
      { id: 'q_mp_4', text: 'أي من الوحدات التالية جزء من المكتبة القياسية لبايثون ويستخدم للعمليات الرياضية المتقدمة (مثل الجذور التربيعية والدوال المثلثية)؟', options: ['`numpy` (مكتبة خارجية قوية جداً للرياضيات)', '`requests` (مكتبة خارجية لطلبات الويب)', '`math` (جزء من المكتبة القياسية)', '`django` (إطار عمل ويب)'], correctAnswerIndex: 2, explanation: 'موديول `math` هو جزء من المكتبة القياسية لبايثون ويوفر دوال رياضية أساسية ومتقدمة.' },
      { id: 'q_mp_5', text: 'لإعطاء اسم مستعار (alias) لوحدة عند استيرادها، أي صيغة تستخدم؟', options: ['`import my_module alias new_name`', '`import my_module as new_name`', '`import new_name from my_module`', '`import my_module to new_name`'], correctAnswerIndex: 1, explanation: 'نستخدم `import module_name as alias_name` لإعطاء اسم مستعار للوحدة.' }
    ]
  },
  {
    id: 'l2-lesson-9',
    slug: 'advanced-string-manipulation',
    title: 'التعامل المتقدم مع النصوص وتنسيقها',
    description: 'اكتشف طرقًا متقدمة لتنسيق النصوص والتعامل معها بمرونة باستخدام f-strings، دالة `.format()`، ودوال النصوص المتقدمة.',
    content: [
      { type: 'heading', text: 'فنون التعامل مع الكلام: النصوص المتقدمة في بايثون' },
      { type: 'paragraph', text: 'النصوص (Strings) من أكتر أنواع البيانات اللي بنتعامل معاها. بايثون بيوفر طرق كتير قوية ومرنة عشان نعالج النصوص دي وننسقها بالشكل اللي إحنا عايزينه.' },
      { type: 'subheading', text: '1. طرق تنسيق النصوص (String Formatting):' },
      { type: 'paragraph', text: 'زمان كنا بنستخدم علامة `%` عشان ندمج قيم متغيرات مع نصوص (زي في لغة C). الطريقة دي لسه شغالة بس مبقتش مفضلة أوي. بعد كده ظهرت دالة `.format()`، وحالياً الطريقة الأحدث والأسهل هي الـ "f-strings" (Formatted String Literals) اللي ظهرت في بايثون 3.6+.'},
      { type: 'code', language: 'python', text: 'name = "Bod Code"\nlanguage = "بايثون"\nyears = 3\n\n# طريقة % (قديمة شوية)\nprint("أهلاً بك في %s! نحن نعلم %s منذ %d سنوات." % (name, language, years))\n\n# طريقة .format()\nprint("أهلاً بك في {}! نحن نعلم {} منذ {} سنوات.".format(name, language, years))\nprint("أهلاً بك في {0}! نحن نعلم {1} منذ {2} سنوات.".format(name, language, years)) # بالأرقام\nprint("أهلاً بك في {app_name}! نحن نعلم {lang} منذ {duration} سنوات.".format(app_name=name, lang=language, duration=years)) # بالأسماء\n\n# طريقة f-strings (الأحدث والأسهل والأكثر قراءة)\nprint(f"أهلاً بك في {name}! نحن نعلم {language} منذ {years} سنوات.")\n\n# f-strings بتسمحلك تحط تعبيرات بايثون جوه الأقواس المعقوفة {}\nprint(f"بعد سنتين، هيكون بقالنا {years + 2} سنوات في تدريس {language.upper()}.")' },
      { type: 'paragraph', text: 'f-strings عادةً هي الخيار الأفضل دلوقتي بسبب سهولتها وقراءتها.'},
      { type: 'subheading', text: '2. دوال النصوص المفيدة (Useful String Methods):' },
      { type: 'paragraph', text: 'النصوص في بايثون عبارة عن كائنات (objects) وعندها دوال (methods) كتير جداً ممكن نستخدمها عشان نعمل عليها عمليات مختلفة. الدوال دي مش بتغير النص الأصلي، لكنها بترجع نص جديد بالنتيجة.'},
      { type: 'list', text: 'أمثلة على دوال النصوص المهمة:', items:[
        '`str.upper()`: بتحول كل الحروف لكبيرة (capital).',
        '`str.lower()`: بتحول كل الحروف لصغيرة (small).',
        '`str.capitalize()`: بتحول أول حرف بس في النص لكبير والباقي صغير.',
        '`str.title()`: بتحول أول حرف من كل كلمة في النص لكبير.',
        '`str.strip()`: بتشيل أي مسافات بيضاء (spaces, tabs, newlines) من بداية ونهاية النص.',
        '`str.lstrip()`: بتشيل المسافات البيضاء من بداية النص بس (left strip).',
        '`str.rstrip()`: بتشيل المسافات البيضاء من نهاية النص بس (right strip).',
        '(ممكن كمان تديهم حرف أو مجموعة حروف معينة يشيلوها بدل المسافات، مثال: `"www.example.com".strip("w.moc")` )',
        '`str.startswith(prefix)`: بترجع `True` لو النص بيبدأ بالـ `prefix` ده، وإلا `False`.',
        '`str.endswith(suffix)`: بترجع `True` لو النص بينتهي بالـ `suffix` ده، وإلا `False`.',
        '`str.find(substring)`: بتبحث عن `substring` جوه النص. لو لقيته، بترجع فهرس (index) أول ظهور ليه. لو ملقيتهوش، بترجع `-1`.',
        '`str.index(substring)`: زي `find`، بس لو ملقاش الـ `substring` بيعمل خطأ `ValueError`.',
        '`str.replace(old, new)`: بتستبدل كل ظهور للـ `old` substring بالـ `new` substring.',
        '`str.split(separator)`: بتقسم النص عند كل ظهور للـ `separator` وبترجع قايمة (list) بالأجزاء. لو محددتش `separator`، بتقسم عند أي مسافة بيضاء.',
        '`separator.join(list_of_strings)`: بتجمع قايمة من النصوص في نص واحد، وبتحط الـ `separator` بين كل نص والتاني.'
      ]},
      { type: 'code', language: 'python', text: 'my_text = "  أهلاً بك يا عالم بايثون الرائع! بايثون لغة ممتعة.  "\n\nprint(f"الأصلي: \'{my_text}\'")\nprint(f"UPPER: {my_text.upper()}")\nprint(f"strip: \'{my_text.strip()}\'")\nprint(f"هل يبدأ بـ \'  أهلاً\': {my_text.startswith("  أهلاً")}") # True\nprint(f"أول ظهور لكلمة \'بايثون\': {my_text.find("بايثون")}")\n\nreplaced_text = my_text.replace("بايثون", "Bod Code")\nprint(f"بعد الاستبدال: {replaced_text}")\n\nwords = my_text.strip().split(" ") # نشيل المسافات ونقسم عند كل مسافة\nprint(f"الكلمات: {words}")\n\njoined_text = "---".join(["واحد", "اتنين", "تلاتة"])\nprint(f"النص المدمج: {joined_text}") # واحد---اتنين---تلاتة' },
      { type: 'subheading', text: 'خصائص تانية للنصوص:'},
      { type: 'list', text: '', items:[
        '**النصوص غير قابلة للتغيير (Immutable):** زي الصفوف (Tuples)، النصوص في بايثون غير قابلة للتغيير بعد ما تعملها. أي دالة بتعملها على نص بترجع نص جديد، مش بتغير الأصلي.',
        '**الوصول للحروف (Indexing) والتقطيع (Slicing):** ممكن توصل لحرف معين في النص عن طريق الفهرس بتاعه (بيبدأ من 0)، وممكن تاخد جزء من النص (تقطيع) بنفس طريقة القوائم.',
        '`len(string)`: بترجع طول النص (عدد الحروف).',
        '**التحقق من نوع الحروف:** فيه دوال زي `str.isdigit()` (هل كل الحروف أرقام؟)، `str.isalpha()` (هل كل الحروف أبجدية؟)، `str.islower()`، `str.isupper()`، `str.isspace()` (هل كل الحروف مسافات بيضاء؟).'
      ]},
      { type: 'code', language: 'python', text: 'greeting = "مرحباً"\nprint(f"طول كلمة \'{greeting}\': {len(greeting)}")\nprint(f"أول حرف: {greeting[0]}") # م\nprint(f"آخر حرف: {greeting[-1]}") # اً\nprint(f"جزء من النص: {greeting[1:4]}") # رحب (من الفهرس 1 لحد قبل 4)\n\n# greeting[0] = "ن" # السطر ده هيعمل خطأ TypeError لأن النصوص immutable\n\nnum_str = "123"\nalpha_str = "BodCode"\nprint(f"\'{num_str}\' is digit? {num_str.isdigit()}") # True\nprint(f"\'{alpha_str}\' is alpha? {alpha_str.isalpha()}") # True' },
      { type: 'paragraph', text: 'التعامل مع النصوص مهارة يومية تقريباً لأي مبرمج. كل ما تعرف دوال وطرق أكتر، كل ما شغلك هيبقى أسهل وأسرع.'}
    ],
    quiz: [
      { id: 'q_str_1', text: 'أي من الطرق التالية هي الأحدث والمفضلة لتنسيق النصوص في بايثون 3.6+ ؟', options: ['استخدام علامة `%`', 'دالة `.format()`', 'f-strings (Formatted String Literals)', 'دمج النصوص باستخدام `+` فقط'], correctAnswerIndex: 2, explanation: 'f-strings هي الطريقة الأحدث والأكثر قراءة ومرونة لتنسيق النصوص.' },
      { id: 'q_str_2', text: 'ماذا تفعل دالة `my_string.strip()`؟', options: ['تحذف كل المسافات من النص', 'تحذف المسافات البيضاء من بداية ونهاية النص فقط', 'تحذف المسافات البيضاء من بداية النص فقط', 'تحول النص إلى قائمة كلمات'], correctAnswerIndex: 1, explanation: '`.strip()` تزيل المسافات البيضاء (أو الحروف المحددة) من طرفي النص.' },
      { id: 'q_str_3', text: 'إذا كانت `text = "Hello Python"`، فماذا سيكون ناتج `text.replace("Python", "World")`؟', options: ['`"Hello World"`', '`"World Python"`', 'النص الأصلي `text` سيتغير إلى `"Hello World"`', 'خطأ، لا يمكن استبدال النصوص'], correctAnswerIndex: 0, explanation: '`.replace()` تعيد نسخة جديدة من النص مع استبدال الجزء القديم بالجديد. النص الأصلي لا يتغير لأن النصوص immutable.' },
      { id: 'q_str_4', text: 'ما هي نتيجة `"-".join(["a", "b", "c"])`؟', options: ['`["a-b-c"]`', '`"a-b-c"`', '`"abc-"`', '`"a", "-", "b", "-", "c"`'], correctAnswerIndex: 1, explanation: '`.join()` تدمج قائمة من النصوص باستخدام السلسلة التي استدعيت عليها كفاصل.' },
      { id: 'q_str_5', text: 'ماذا تعيد دالة `my_string.find("xyz")` إذا لم يتم العثور على السلسلة الفرعية `"xyz"` في `my_string`؟', options: ['`None`', '`False`', 'خطأ `ValueError`', '`-1`'], correctAnswerIndex: 3, explanation: '`.find()` تعيد `-1` إذا لم يتم العثور على السلسلة الفرعية. بينما `.index()` تثير `ValueError` في هذه الحالة.' }
    ]
  },
  {
    id: 'l2-lesson-10',
    slug: 'datetime-module',
    title: 'التعامل مع التواريخ والأوقات (`datetime`)',
    description: 'تعلم كيفية إنشاء، تعديل، وتنسيق التواريخ والأوقات في بايثون باستخدام موديول `datetime`.',
    content: [
      { type: 'heading', text: 'لا تفوت الميعاد: التعامل مع التواريخ والأوقات بـ `datetime`' },
      { type: 'paragraph', text: 'كتير من التطبيقات بتحتاج تتعامل مع التواريخ والأوقات: تسجيل وقت حدوث حاجة معينة، حساب فرق بين تاريخين، عرض التاريخ بشكل معين للمستخدم، وهكذا. بايثون بيوفر موديول مدمج قوي اسمه `datetime` للتعامل مع كل ده.' },
      { type: 'code', language: 'python', text: 'import datetime' },
      { type: 'subheading', text: 'المكونات الأساسية في موديول `datetime`:' },
      { type: 'list', text: 'أهم الكائنات (Classes) اللي هتتعامل معاها:', items:[
        '`datetime.date`: بيمثل تاريخ (سنة، شهر، يوم).',
        '`datetime.time`: بيمثل وقت خلال اليوم (ساعة، دقيقة، ثانية، مايكروثانية).',
        '`datetime.datetime`: بيمثل تاريخ ووقت مع بعض (سنة، شهر، يوم، ساعة، دقيقة، ثانية، مايكروثانية). ده أكتر واحد بنستخدمه.',
        '`datetime.timedelta`: بيمثل "فترة زمنية" أو فرق بين تاريخين أو وقتين (مثلاً، 5 أيام، أو ساعتين و 30 دقيقة).'
      ]},
      { type: 'subheading', text: '1. الحصول على التاريخ والوقت الحالي:' },
      { type: 'code', language: 'python', text: '# التاريخ الحالي\ntoday_date = datetime.date.today()\nprint(f"تاريخ النهاردة: {today_date}")\nprint(f"السنة: {today_date.year}, الشهر: {today_date.month}, اليوم: {today_date.day}")\n\n# التاريخ والوقت الحالي\nnow_datetime = datetime.datetime.now()\nprint(f"الوقت الحالي بالظبط: {now_datetime}")\nprint(f"الساعة: {now_datetime.hour}, الدقيقة: {now_datetime.minute}, الثانية: {now_datetime.second}")\n\n# ممكن تجيب الوقت الحالي بتوقيت UTC (التوقيت العالمي المنسق) لو عايز تتجنب مشاكل التوقيت المحلي\n# utc_now = datetime.datetime.utcnow()\n# print(f"الوقت الحالي UTC: {utc_now}")' },
      { type: 'subheading', text: '2. إنشاء كائنات `datetime` و `date` و `time` بنفسك:' },
      { type: 'code', language: 'python', text: '# إنشاء تاريخ معين\nspecific_date = datetime.date(2025, 1, 20) # 20 يناير 2025\nprint(f"تاريخ معين: {specific_date}")\n\n# إنشاء وقت معين\nspecific_time = datetime.time(14, 30, 0) # الساعة 2 ونص الضهر (نظام 24 ساعة)\nprint(f"وقت معين: {specific_time}")\n\n# إنشاء تاريخ ووقت معين\nspecific_datetime = datetime.datetime(2024, 7, 26, 10, 0, 0) # 26 يوليو 2024، الساعة 10 صباحاً\nprint(f"تاريخ ووقت معين: {specific_datetime}")' },
      { type: 'subheading', text: '3. تنسيق التواريخ والأوقات كنصوص (Formatting - `strftime`):' },
      { type: 'paragraph', text: 'ساعات بنكون عايزين نعرض التاريخ أو الوقت للمستخدم بشكل معين (مثلاً "26/07/2024" أو "10:00 AM"). بنستخدم دالة `strftime()` (string format time) اللي بتاخد "كود تنسيق" (format code) بيوصف الشكل المطلوب.'},
      { type: 'list', text: 'أشهر أكواد التنسيق (ممكن تلاقي قايمة كاملة في توثيق بايثون):', items:[
        '`%Y`: السنة بأربع أرقام (e.g., 2024).',
        '`%y`: السنة برقمين (e.g., 24).',
        '`%m`: الشهر كرقم (01-12).',
        '`%B`: اسم الشهر كامل (e.g., July).',
        '`%b`: اسم الشهر مختصر (e.g., Jul).',
        '`%d`: اليوم في الشهر كرقم (01-31).',
        '`%A`: اسم اليوم كامل (e.g., Friday).',
        '`%a`: اسم اليوم مختصر (e.g., Fri).',
        '`%H`: الساعة بنظام 24 (00-23).',
        '`%I`: الساعة بنظام 12 (01-12).',
        '`%M`: الدقايق (00-59).',
        '`%S`: الثواني (00-59).',
        '`%p`: AM أو PM (لو مستخدم `%I`).'
      ]},
      { type: 'code', language: 'python', text: 'dt_object = datetime.datetime.now()\n\nformatted_style1 = dt_object.strftime("%d/%m/%Y %H:%M:%S")\nprint(f"شكل 1: {formatted_style1}")\n\nformatted_style2 = dt_object.strftime("%A, %B %d, %Y - %I:%M %p")\nprint(f"شكل 2: {formatted_style2}") # هيستخدم أسماء الشهور والأيام بالإنجليزي افتراضياً\n\n# لو عايز أسماء عربية، ممكن تحتاج مكتبات تانية أو تعملها يدوي (معقد شوية مع strftime لوحدها)' },
      { type: 'subheading', text: '4. تحويل النصوص إلى كائنات `datetime` (Parsing - `strptime`):' },
      { type: 'paragraph', text: 'لو عندك تاريخ أو وقت كنص (مثلاً من ملف أو من المستخدم) وعايز تحوله لكائن `datetime` عشان تقدر تعمل عليه عمليات، بتستخدم دالة `datetime.datetime.strptime()` (string parse time). الدالة دي بتاخد النص وكود التنسيق اللي بيوصف شكل النص ده.'},
      { type: 'code', language: 'python', text: 'date_string = "2023-10-15 17:45:30"\nformat_code = "%Y-%m-%d %H:%M:%S"\n\ntry:\n    parsed_datetime = datetime.datetime.strptime(date_string, format_code)\n    print(f"النص الأصلي: \'{date_string}\'")\n    print(f"الكائن بعد التحويل: {parsed_datetime}")\n    print(f"سنة الكائن المحول: {parsed_datetime.year}")\nexcept ValueError as e:\n    print(f"صيغة التاريخ في النص مش مطابقة لكود التنسيق: {e}")' },
      { type: 'subheading', text: '5. التعامل مع الفترات الزمنية (`timedelta`):' },
      { type: 'paragraph', text: 'كائن `timedelta` بيمثل فرق بين تاريخين أو وقتين. ممكن تستخدمه عشان تضيف أو تطرح فترة زمنية من تاريخ أو وقت معين.'},
      { type: 'code', language: 'python', text: 'now = datetime.datetime.now()\n\n# فترة زمنية: 5 أيام، 3 ساعات، و 30 دقيقة\ntime_delta = datetime.timedelta(days=5, hours=3, minutes=30)\n\nfuture_datetime = now + time_delta\nprint(f"الوقت الحالي: {now}")\nprint(f"الوقت بعد 5 أيام و 3.5 ساعات: {future_datetime}")\n\npast_datetime = now - datetime.timedelta(weeks=2) # ممكن تستخدم weeks, seconds, microseconds كمان\nprint(f"الوقت من أسبوعين فاتوا: {past_datetime}")\n\n# حساب الفرق بين تاريخين\ndate1 = datetime.datetime(2024, 1, 1)\ndate2 = datetime.datetime(2024, 1, 15, 12, 0, 0)\ndifference = date2 - date1\nprint(f"الفرق بين {date1} و {date2} هو: {difference}")\nprint(f"عدد الأيام في الفرق: {difference.days}")\nprint(f"عدد الثواني الكلي في الفرق: {difference.total_seconds()}")' },
      { type: 'paragraph', text: 'موديول `datetime` أساسي جداً لأي تطبيق بيحتاج يتعامل مع الوقت. ممكن يكون فيه تفاصيل أكتر بخصوص المناطق الزمنية (Timezones) والتعامل مع التوقيت الصيفي، بس دي بتكون مواضيع متقدمة شوية.'}
    ],
    quiz: [
      { id: 'q_dt_1', text: 'أي كلاس من موديول `datetime` يستخدم لتمثيل تاريخ ووقت معًا؟', options: ['`datetime.date`', '`datetime.time`', '`datetime.datetime`', '`datetime.timedelta`'], correctAnswerIndex: 2, explanation: '`datetime.datetime` يجمع بين معلومات التاريخ والوقت.' },
      { id: 'q_dt_2', text: 'ما هي الدالة التي تستخدم للحصول على التاريخ والوقت الحاليين؟', options: ['`datetime.datetime.current()`', '`datetime.datetime.now()` (أو `datetime.datetime.today()`)', '`datetime.time.get()`', '`datetime.date.fetch()`'], correctAnswerIndex: 1, explanation: '`datetime.datetime.now()` أو `datetime.datetime.today()` يعيدان التاريخ والوقت الحاليين.' },
      { id: 'q_dt_3', text: 'لتحويل كائن `datetime` إلى سلسلة نصية بتنسيق معين، أي دالة تستخدم؟', options: ['`strftime()`', '`strptime()`', '`format_datetime()`', '`parse_time()`'], correctAnswerIndex: 0, explanation: '`strftime()` (string format time) تستخدم لتنسيق كائن `datetime` إلى نص.' },
      { id: 'q_dt_4', text: 'ما هو كود التنسيق (format code) الذي يمثل "السنة بأربعة أرقام" في `strftime` و `strptime`؟', options: ['`%y`', '`%Y`', '`%yr`', '`%year`'], correctAnswerIndex: 1, explanation: '`%Y` يمثل السنة بأربعة أرقام (مثل 2024)، بينما `%y` يمثلها برقمين (مثل 24).' },
      { id: 'q_dt_5', text: 'ماذا يمثل كائن `datetime.timedelta`؟', options: ['تاريخًا مستقبليًا محددًا', 'وقتًا محددًا في اليوم', 'فترة زمنية أو فرقًا بين تاريخين/وقتين', 'تقويمًا سنويًا'], correctAnswerIndex: 2, explanation: '`timedelta` يستخدم لتمثيل الفروق الزمنية والقيام بعمليات حسابية عليها مع التواريخ والأوقات.' }
    ]
  },
  {
    id: 'l2-lesson-11',
    slug: 'args-kwargs-unpacking',
    title: 'المزيد عن الدوال: `*args`, `**kwargs` وتفكيك المعاملات',
    description: 'تعمق في كيفية إنشاء دوال مرنة تقبل عددًا متغيرًا من المعاملات الموضعية والاسمية، وكيفية استخدام تفكيك المعاملات.',
    content: [
      { type: 'heading', text: 'دوال سوبر مرنة: `*args` و `**kwargs` وفك المعاملات' },
      { type: 'paragraph', text: 'في بايثون، ساعات بنكون عايزين نعمل دالة تقدر تاخد عدد مش ثابت من الـ arguments (الوسائط). مثلاً، دالة بتجمع أي عدد من الأرقام، أو دالة بتطبع أي عدد من القيم. هنا بتيجي فايدة `*args` و `**kwargs`.' },
      { type: 'subheading', text: '1. `*args` (لتمرير عدد متغير من الوسائط الموضعية - Positional Arguments):' },
      { type: 'paragraph', text: 'لو حطيت `*args` (الاسم `args` ده مجرد عرف، ممكن تسميه أي حاجة تانية بس لازم النجمة `*` قبله) في تعريف الدالة بتاعتك كآخر معامل موضعي، ده معناه إن الدالة دي ممكن تاخد أي عدد إضافي من الوسائط الموضعية. بايثون هيجمع كل الوسائط الموضعية الزيادة دي في "صف" (Tuple) بالاسم اللي إنت اخترته (هنا `args`).'},
      { type: 'code', language: 'python', text: 'def print_all_arguments(*args):\n    print(f"نوع args هو: {type(args)}") # <class \'tuple\'>\n    print(f"الوسائط اللي اتبعتت: {args}")\n    for arg in args:\n        print(f"  - الوسيط: {arg}")\n\nprint_all_arguments(1, "مرحباً", True, 3.14)\n# الناتج:\n# نوع args هو: <class \'tuple\'>\n# الوسائط اللي اتبعتت: (1, \'مرحباً\', True, 3.14)\n#   - الوسيط: 1\n#   - الوسيط: مرحباً\n#   - الوسيط: True\n#   - الوسيط: 3.14\n\nprint_all_arguments() # ممكن منبعتش أي حاجة، args هيبقى tuple فاضي ()\n\ndef sum_numbers(first_num, *other_numbers): # ممكن يكون فيه معاملات عادية قبل *args\n    total = first_num\n    for num in other_numbers:\n        total += num\n    return total\n\nprint(f"مجموع 1,2,3 هو: {sum_numbers(1, 2, 3)}") # 6\nprint(f"مجموع 10,20,30,40 هو: {sum_numbers(10, 20, 30, 40)}") # 100\nprint(f"مجموع 5 بس هو: {sum_numbers(5)}") # 5 (other_numbers هيكون tuple فاضي)' },
      { type: 'subheading', text: '2. `**kwargs` (لتمرير عدد متغير من الوسائط الاسمية/المفتاحية - Keyword Arguments):' },
      { type: 'paragraph', text: 'لو حطيت `**kwargs` (برضه الاسم `kwargs` عرف، المهم النجمتين `**` قبله) في تعريف الدالة كآخر معامل خالص، ده معناه إن الدالة ممكن تاخد أي عدد إضافي من الوسائط الاسمية (اللي بتتكتب على شكل `key=value`). بايثون هيجمع كل الوسائط الاسمية الزيادة دي في "قاموس" (Dictionary) بالاسم اللي اخترته (هنا `kwargs`). المفاتيح هتكون أسماء المعاملات، والقيم هتكون القيم اللي اتبعتتلها.'},
      { type: 'code', language: 'python', text: 'def print_keyword_arguments(**kwargs):\n    print(f"نوع kwargs هو: {type(kwargs)}") # <class \'dict\'>\n    print(f"الوسائط الاسمية اللي اتبعتت: {kwargs}")\n    for key, value in kwargs.items():\n        print(f"  - المفتاح \'{key}\' قيمته: {value}")\n\nprint_keyword_arguments(name="أحمد", age=30, city="القاهرة", country="مصر")\n# الناتج:\n# نوع kwargs هو: <class \'dict\'>\n# الوسائط الاسمية اللي اتبعتت: {\'name\': \'أحمد\', \'age\': 30, \'city\': \'القاهرة\', \'country\': \'مصر\'}\n#   - المفتاح \'name\' قيمته: أحمد\n#   - المفتاح \'age\' قيمته: 30\n#   - المفتاح \'city\' قيمته: القاهرة\n#   - المفتاح \'country\' قيمته: مصر\n\nprint_keyword_arguments() # kwargs هيبقى قاموس فاضي {}\n\n# ممكن نجمع بينهم كلهم (بالترتيب ده: معاملات عادية، بعدين *args، بعدين **kwargs)\ndef super_function(param1, param2, *args, **kwargs):\n    print(f"param1: {param1}")\n    print(f"param2: {param2}")\n    print(f"args: {args}")\n    print(f"kwargs: {kwargs}")\n\nsuper_function("قيمة1", "قيمة2", 10, 20, extra_arg="زيادة", another_extra=True)' },
      { type: 'subheading', text: '3. تفكيك المعاملات (Unpacking Arguments) عند استدعاء الدالة:' },
      { type: 'paragraph', text: 'العكس برضه ممكن! لو عندك قايمة أو tuple وعايز تفككها وتمرر عناصرها كأنهم وسائط موضعية منفصلة لدالة، ممكن تستخدم النجمة `*` "قبل" اسم القايمة أو الـ tuple وانت بتستدعي الدالة.'},
      { type: 'paragraph', text: 'ولو عندك قاموس وعايز تفككه وتمرر أزواجه (key-value pairs) كأنهم وسائط اسمية منفصلة لدالة، ممكن تستخدم النجمتين `**` "قبل" اسم القاموس وانت بتستدعي الدالة.'},
      { type: 'code', language: 'python', text: 'def describe_person(name, age, city):\n    print(f"{name} عنده {age} سنة وساكن في {city}.")\n\nperson_list = ["علي", 25, "أسوان"]\ndescribe_person(*person_list) # كأنك كتبت describe_person("علي", 25, "أسوان")\n\nperson_dict = {"name": "سارة", "city": "الإسكندرية", "age": 28}\ndescribe_person(**person_dict) # كأنك كتبت describe_person(name="سارة", city="الإسكندرية", age=28)\n                             # الترتيب في القاموس مش مهم هنا طالما المفاتيح بتطابق أسماء المعاملات\n\n# مثال تاني مع دالة بتاخد *args\nnumbers_to_sum = [1, 2, 3, 4, 5]\n# فاكرين دالة sum_numbers(first_num, *other_numbers)؟\n# لو عايزين نبعت أول عنصر كـ first_num والباقي كـ other_numbers:\n# print(sum_numbers(numbers_to_sum[0], *numbers_to_sum[1:])) # الناتج 15\n\n# دالة print المدمجة نفسها بتاخد *args\nmy_parts = ["بايثون", "سهل", "وممتع"]\nprint(*my_parts, sep=" - ") # هيطبع: بايثون - سهل - وممتع' },
      { type: 'paragraph', text: '`*args` و `**kwargs` وتفكيك المعاملات أدوات قوية جداً بتدي دوالك مرونة كبيرة. بتستخدمهم كتير في عمل المُزخرفات (Decorators) وفي تمرير الـ arguments بين الدوال في التسلسلات الهرمية للـ classes، وفي بناء دوال بتقبل إعدادات كتير اختيارية.'}
    ],
    quiz: [
      { id: 'q_ak_1', text: 'في تعريف الدالة `def my_func(*args):`، ماذا يمثل `*args`؟', options: ['معامل اسمي واحد فقط اسمه args', 'صف (Tuple) يحتوي على كل الوسائط الموضعية الإضافية التي تم تمريرها للدالة', 'قاموس (Dictionary) يحتوي على كل الوسائط الاسمية', 'قائمة (List) بكل المعاملات'], correctAnswerIndex: 1, explanation: '`*args` يجمع كل الوسائط الموضعية الزائدة في tuple.' },
      { id: 'q_ak_2', text: 'في تعريف الدالة `def my_func(**kwargs):`، ما هو نوع المتغير `kwargs` داخل الدالة؟', options: ['Tuple', 'List', 'Set', 'Dictionary'], correctAnswerIndex: 3, explanation: '`**kwargs` يجمع كل الوسائط الاسمية الزائدة في قاموس (dictionary).' },
      { id: 'q_ak_3', text: 'إذا كان لديك قائمة `my_list = [1, 2, 3]` ودالة `test_func(a, b, c): pass`، كيف يمكنك استدعاء `test_func` وتمرير عناصر `my_list` كمعاملات موضعية منفصلة؟', options: ['`test_func(my_list)`', '`test_func(*my_list)`', '`test_func(**my_list)`', '`test_func(list=my_list)`'], correctAnswerIndex: 1, explanation: 'نجمة واحدة `*` قبل اسم القائمة (أو الـ tuple) تقوم بتفكيكها إلى معاملات موضعية عند استدعاء الدالة.' },
      { id: 'q_ak_4', text: 'ما هو الترتيب الصحيح للمعاملات في تعريف دالة يمكن أن تقبل معاملات عادية، و `*args`، و `**kwargs`؟', options: ['`def func(*args, **kwargs, normal_param):`', '`def func(normal_param, **kwargs, *args):`', '`def func(normal_param, *args, **kwargs):`', 'الترتيب غير مهم'], correctAnswerIndex: 2, explanation: 'الترتيب القياسي هو: المعاملات الموضعية العادية، ثم `*args`، ثم المعاملات الاسمية العادية (لو فيه)، ثم `**kwargs`.' },
      { id: 'q_ak_5', text: 'إذا تم استدعاء دالة `my_func(name="Ali", age=30)` وكان تعريفها `def my_func(**options):`، ماذا ستحتوي `options`؟', options: ['`("Ali", 30)`', '`[("name", "Ali"), ("age", 30)]`', '`{"name": "Ali", "age": 30}`', '`None`'], correctAnswerIndex: 2, explanation: '`**kwargs` (هنا اسمه `options`) سيجمع الوسائط الاسمية في قاموس: `{\'name\': \'Ali\', \'age\': 30}`.' }
    ]
  },
  {
    id: 'l2-lesson-12',
    slug: 'csv-files',
    title: 'التعامل مع ملفات CSV (قيم مفصولة بفواصل)',
    description: 'تعلم كيفية قراءة البيانات من ملفات CSV الشائعة وكتابة البيانات إليها باستخدام موديول `csv` المدمج.',
    content: [
      { type: 'heading', text: 'جداول البيانات البسيطة: ملفات CSV' },
      { type: 'paragraph', text: 'ملفات CSV (Comma-Separated Values - قيم مفصولة بفواصل) هي طريقة شائعة جداً لتخزين البيانات الجدولية (زي جداول الإكسل البسيطة) في ملف نصي عادي. كل سطر في الملف بيمثل صف في الجدول، والقيم جوه كل سطر بتكون مفصولة بفاصلة (comma) أو أي محدد تاني (delimiter) زي الفاصلة المنقوطة (semicolon) أو التاب (tab).' },
      { type: 'paragraph', text: 'بايثون عنده موديول مدمج اسمه `csv` بيسهل علينا قراءة وكتابة الملفات دي.' },
      { type: 'code', language: 'python', text: 'import csv' },
      { type: 'subheading', text: '1. قراءة ملف CSV:' },
      { type: 'paragraph', text: 'عشان نقرا ملف CSV، بنفتحه الأول (يفضل باستخدام `with open(...)`) وبعدين بنعمل كائن `csv.reader` من كائن الملف. كائن الـ `reader` ده بيكون مُكرِّر (iterator) بنقدر نلف عليه عشان ناخد كل صف كقايمة (list) من النصوص.'},
      { type: 'paragraph', text: 'لو أول سطر في ملف الـ CSV بتاعك فيه أسماء الأعمدة (header)، ممكن تستخدم `csv.DictReader` بدل `csv.reader`. ده هيخليك توصل للقيم في كل صف عن طريق اسم العمود (كأنه قاموس) بدل الفهرس.'},
      { type: 'paragraph', text: 'مثال لملف اسمه `students.csv`:'},
      { type: 'code', language: 'text',
        text:
`اسم,عمر,مدينة
أحمد,22,القاهرة
سارة,25,الإسكندرية
علي,23,أسوان`
      },
      { type: 'code', language: 'python', text:
`import csv

file_path = "students.csv" # افترض إن الملف ده موجود في نفس مكان السكربت

# أولاً: ننشئ الملف الوهمي students.csv عشان الكود يشتغل
try:
    with open(file_path, "w", newline="", encoding="utf-8") as temp_f: # newline="" مهمة عند الكتابة عشان متعملش سطور فاضية زيادة
        writer = csv.writer(temp_f)
        writer.writerow(["اسم", "عمر", "مدينة"]) # كتابة الهيدر
        writer.writerow(["أحمد", "22", "القاهرة"])
        writer.writerow(["سارة", "25", "الإسكندرية"])
        writer.writerow(["علي", "23", "أسوان"])
    print(f"تم إنشاء الملف المؤقت {file_path} للدرس.")
except IOError:
    print(f"لم نتمكن من إنشاء الملف المؤقت {file_path}.")


print("\\n--- القراءة باستخدام csv.reader ---")
try:
    with open(file_path, mode="r", encoding="utf-8", newline="") as csvfile: # newline="" مهمة عند القراءة برضه
        csv_reader = csv.reader(csvfile)
        header = next(csv_reader) # نقرا الهيدر لوحده لو عايزين
        print(f"أسماء الأعمدة: {header}")
        for row_list in csv_reader:
            # row_list هتكون قايمة زي [\'أحمد\', \'22\', \'القاهرة\']
            if row_list: # نتأكد إن الصف مش فاضي
                print(f"الاسم: {row_list[0]}, العمر: {row_list[1]}, المدينة: {row_list[2]}")
except FileNotFoundError:
    print(f"الملف {file_path} مش موجود.")
except Exception as e:
    print(f"حصل خطأ أثناء القراءة بـ reader: {e}")


print("\\n--- القراءة باستخدام csv.DictReader ---")
try:
    with open(file_path, mode="r", encoding="utf-8", newline="") as csvfile:
        dict_reader = csv.DictReader(csvfile) # بيستخدم أول سطر كهيدر افتراضياً
        print(f"أسماء الحقول (من DictReader): {dict_reader.fieldnames}")
        for row_dict in dict_reader:
            # row_dict هتكون قاموس زي {\'اسم\': \'أحمد\', \'عمر\': \'22\', \'مدينة\': \'القاهرة\'}
            if row_dict:
                print(f"الاسم: {row_dict['اسم']}, العمر: {row_dict['عمر']}, المدينة: {row_dict['مدينة']}")
except FileNotFoundError:
    print(f"الملف {file_path} مش موجود.")
except Exception as e:
    print(f"حصل خطأ أثناء القراءة بـ DictReader: {e}")`
      },
      { type: 'paragraph', text: '**ملاحظات مهمة عند القراءة:**'},
      { type: 'list', text: '', items:[
        '`newline=""`: مهم نستخدمها مع `open()` لما نتعامل مع ملفات CSV عشان نتجنب مشاكل السطور الجديدة المختلفة بين أنظمة التشغيل.',
        'كل القيم اللي بتتقرا من ملف CSV بتكون "نصوص" (strings) بشكل افتراضي، حتى لو كانت أرقام. لو عايز تعمل عليها عمليات حسابية، هتحتاج تحولها الأول (مثلاً `int(row_list[1])`).',
        'لو ملف الـ CSV بتاعك بيستخدم محدد (delimiter) تاني غير الفاصلة (مثلاً فاصلة منقوطة `;` أو تاب `\\t`)، ممكن تحدده في `csv.reader` أو `csv.DictReader` باستخدام `delimiter='
      ]},
      { type: 'subheading', text: '2. كتابة ملف CSV:' },
      { type: 'paragraph', text: 'عشان نكتب بيانات في ملف CSV، بنفتح الملف في وضع الكتابة (`"w"`) أو الإضافة (`"a"`)، وبنعمل كائن `csv.writer`. الكائن ده عنده دالتين أساسيتين للكتابة:'},
      { type: 'list', text: '', items:[
        '`writer.writerow(list_of_values)`: بتكتب قايمة من القيم كصف واحد في الملف، وبتفصل بينهم بالمحدد (الفاصلة افتراضياً).',
        '`writer.writerows(list_of_lists)`: بتاخد قايمة من القوايم (كل قايمة داخلية بتمثل صف) وبتكتبهم كلهم ورا بعض.'
      ]},
      { type: 'paragraph', text: 'لو عايز تكتب هيدر (أسماء الأعمدة) وتستخدم طريقة تشبه `DictReader` في الكتابة، ممكن تستخدم `csv.DictWriter`.'},
      { type: 'code', language: 'python', text:
`output_file_path = "output_students.csv"
students_data_to_write = [
    {"name": "نادر", "age": 28, "city": "الجيزة"},
    {"name": "هناء", "age": 26, "city": "طنطا"},
    {"name": "يوسف", "age": 30, "city": "المنصورة"}
]
field_names = ["name", "age", "city"] # أسماء الأعمدة مهمة لـ DictWriter

print(f"\\n--- الكتابة في ملف {output_file_path} باستخدام csv.DictWriter ---")
try:
    with open(output_file_path, mode="w", encoding="utf-8", newline="") as outfile:
        csv_dict_writer = csv.DictWriter(outfile, fieldnames=field_names)
        
        csv_dict_writer.writeheader() # كتابة سطر الهيدر (أسماء الأعمدة)
        
        for student_record in students_data_to_write:
            csv_dict_writer.writerow(student_record) # كتابة كل قاموس كصف
        
        # أو ممكن نستخدم writerows لو عندنا قايمة من القواميس على طول
        # csv_dict_writer.writerows(students_data_to_write) # بس لازم نكون كتبنا الهيدر الأول
            
    print(f"تمت كتابة البيانات بنجاح في {output_file_path}")
    
    # للتأكد، نقرا الملف اللي كتبناه
    with open(output_file_path, mode="r", encoding="utf-8", newline="") as f_check:
        print("\\nمحتوى الملف المكتوب:")
        for line in f_check:
            print(line.strip())
            
except IOError as e:
    print(f"حصل خطأ أثناء الكتابة للملف {output_file_path}: {e}")
except Exception as e:
    print(f"حصل خطأ عام: {e}")`
      },
      { type: 'paragraph', text: 'موديول `csv` بيوفر طريقة قياسية وموثوقة للتعامل مع ملفات CSV في بايثون، وبيجنبك كتير من المشاكل اللي ممكن تحصل لو حاولت تقسم السطور وتتعامل مع الفواصل بنفسك يدويًا (خصوصاً لو القيم نفسها فيها فواصل أو علامات تنصيص).'}
    ],
    quiz: [
      { id: 'q_csv_1', text: 'ما هو الموديول المدمج في بايثون الذي يستخدم للتعامل مع ملفات CSV؟', options: ['`json`', '`pandas` (مكتبة خارجية)', '`csv`', '`textfiles`'], correctAnswerIndex: 2, explanation: 'موديول `csv` هو جزء من المكتبة القياسية لبايثون.' },
      { id: 'q_csv_2', text: 'عند قراءة ملف CSV باستخدام `csv.reader`، ما هو نوع البيانات الذي يمثله كل صف يتم قراءته؟', options: ['Tuple (صف)', 'Dictionary (قاموس)', 'String (نص واحد كبير)', 'List (قائمة) من النصوص'], correctAnswerIndex: 3, explanation: '`csv.reader` يعيد كل صف كقائمة (list) من السلاسل النصية.' },
      { id: 'q_csv_3', text: 'ما هي الفائدة من استخدام `newline=""` عند فتح ملف CSV للقراءة أو الكتابة؟', options: ['لإضافة سطر فارغ بعد كل صف', 'لمنع مشاكل تفسير نهايات الأسطر المختلفة بين أنظمة التشغيل المختلفة وضمان تعامل موديول `csv` معها بشكل صحيح', 'لجعل الملف للقراءة فقط', 'لتحديد أن الملف لا يحتوي على هيدر'], correctAnswerIndex: 1, explanation: '`newline=""` يساعد في التعامل الصحيح مع نهايات الأسطر في ملفات CSV عبر مختلف الأنظمة.' },
      { id: 'q_csv_4', text: 'أي دالة من `csv.writer` تستخدم لكتابة "صف واحد" من البيانات (والذي يكون عادةً قائمة) إلى ملف CSV؟', options: ['`writer.add_row()`', '`writer.write_line()`', '`writer.writerow()`', '`writer.save_row()`'], correctAnswerIndex: 2, explanation: '`writer.writerow(list_of_values)` تكتب صفًا واحدًا.' },
      { id: 'q_csv_5', text: 'إذا كنت تريد الوصول إلى القيم في صفوف CSV باستخدام أسماء الأعمدة بدلاً من الفهارس، أي قارئ (reader) من موديول `csv` ستستخدم؟', options: ['`csv.ColumnReader`', '`csv.DictReader`', '`csv.NamedReader`', '`csv.ObjectReader`'], correctAnswerIndex: 1, explanation: '`csv.DictReader` يقرأ كل صف كقاموس حيث تكون المفاتيح هي أسماء الأعمدة (من الهيدر).' }
    ]
  },
  {
    id: 'l2-lesson-13',
    slug: 'filesystem-operations',
    title: 'عمليات نظام الملفات (`os` و `pathlib`)',
    description: 'تعلم كيفية التفاعل مع نظام الملفات: التحقق من وجود الملفات والمجلدات، إنشائها، حذفها، سرد محتوياتها، والتنقل بين المسارات.',
    content: [
      { type: 'heading', text: 'التحكم في مملكتك الرقمية: عمليات نظام الملفات' },
      { type: 'paragraph', text: 'كتير أوي برامجنا بتحتاج تتفاعل مع الملفات والمجلدات اللي على جهاز الكمبيوتر: تتأكد إذا كان ملف معين موجود ولا لأ، تعمل مجلد جديد، تجيب قايمة بالملفات اللي جوه مجلد، تعرف مسار الملف الحالي، وهكذا. بايثون بيوفر أدوات قوية عشان نعمل كل ده.' },
      { type: 'paragraph', text: 'فيه موديولين أساسيين بنستخدمهم للعمليات دي:'},
      { type: 'list', text:'', items:[
        '`os`: موديول قديم شوية بس لسه مستخدم وفيه وظايف كتير جداً للتعامل مع نظام التشغيل بشكل عام، ومن ضمنها عمليات نظام الملفات.',
        '`pathlib`: موديول أحدث (ظهر في بايثون 3.4+) وبيقدم طريقة أكثر حداثة وشيئية (object-oriented) للتعامل مع المسارات (paths) والملفات. ناس كتير بتفضله دلوقتي لأنه بيخلي الكود أوضح وأسهل في القراءة وبيتعامل مع اختلافات أنظمة التشغيل (ويندوز، ماك، لينكس) بشكل أحسن.'
      ]},
      { type: 'paragraph', text: 'هنشوف أمثلة من الاتنين، بس التركيز هيكون على `pathlib` لأنه هو المستقبل.'},
      { type: 'code', language: 'python', text: 'import os\nfrom pathlib import Path # بنستورد كلاس Path من موديول pathlib' },
      { type: 'subheading', text: '1. التعامل مع المسارات (Paths) باستخدام `pathlib`:' },
      { type: 'paragraph', text: 'كلاس `Path` هو أساس الشغل في `pathlib`. بنعمل منه كائن بيمثل مسار معين (ملف أو مجلد).'},
      { type: 'code', language: 'python', text: '# إنشاء كائن Path للمجلد الحالي\ncurrent_dir = Path(".") # "." بترمز للمجلد الحالي\n# أو ممكن نستخدم Path.cwd() (current working directory)\n# current_dir = Path.cwd()\nprint(f"المجلد الحالي (Path object): {current_dir}")\nprint(f"المسار المطلق للمجلد الحالي: {current_dir.resolve()}")\n\n# إنشاء كائن Path لملف معين (حتى لو مش موجود لسه)\nfile_path_obj = Path("my_folder/my_document.txt")\nprint(f"كائن مسار الملف: {file_path_obj}")\n\n# بناء المسارات باستخدام / (زي ما بنعمل في لينكس/ماك، وبيشتغل صح في ويندوز كمان)\nconfig_dir = Path.home() / ".myapp" / "settings" # Path.home() بيجيب مجلد المستخدم الرئيسي\nprint(f"مسار مجلد الإعدادات المفترض: {config_dir}")\n\n# أجزاء المسار\nprint(f"اسم الملف: {file_path_obj.name}") # my_document.txt\nprint(f"اسم الملف بدون امتداد: {file_path_obj.stem}") # my_document\nprint(f"امتداد الملف: {file_path_obj.suffix}") # .txt\nprint(f"المجلد الأب: {file_path_obj.parent}") # my_folder\nprint(f"هل المسار مطلق؟ {file_path_obj.is_absolute()}") # False (لأنه نسبي)' },
      { type: 'subheading', text: '2. التحقق من وجود الملفات والمجلدات:' },
      { type: 'code', language: 'python', text: 'file_to_check = Path("students.csv") # افترض إن الملف ده عملناه في درس الـ CSV\n\nif file_to_check.exists():\n    print(f"الملف \'{file_to_check}\' موجود.")\n    if file_to_check.is_file():\n        print("وهو ملف عادي.")\n    elif file_to_check.is_dir():\n        print("وهو مجلد.")\nelse:\n    print(f"الملف أو المجلد \'{file_to_check}\' غير موجود.")\n\n# باستخدام os (الطريقة القديمة)\n# if os.path.exists("students.csv"):\n#     print("موجود (باستخدام os)")' },
      { type: 'subheading', text: '3. إنشاء المجلدات:' },
      { type: 'code', language: 'python', text: 'new_directory = Path("bod_code_test_dir/another_subdir")\n\ntry:\n    # new_directory.mkdir() # هيعمل المجلد الأخير بس (another_subdir) ولازم bod_code_test_dir يكون موجود\n    new_directory.mkdir(parents=True, exist_ok=True) # parents=True بيعمل كل المجلدات الناقصة في المسار\n                                                   # exist_ok=True بيخليه ميعملش خطأ لو المجلد موجود بالفعل\n    print(f"تم إنشاء المجلد: {new_directory}")\nexcept OSError as e:\n    print(f"خطأ في إنشاء المجلد: {e}")\n\n# باستخدام os\n# if not os.path.exists("os_test_dir"):\n#     os.makedirs("os_test_dir/subdir") # makedirs بتعمل كل المجلدات الناقصة' },
      { type: 'subheading', text: '4. سرد محتويات المجلد:' },
      { type: 'code', language: 'python', text: 'target_dir_to_list = Path(".") # المجلد الحالي\n\nprint(f"\\nمحتويات المجلد \'{target_dir_to_list.resolve()}\':")\nfor item_path in target_dir_to_list.iterdir(): # iterdir بترجع مُكرِّر بكل العناصر اللي جوه المجلد\n    item_type = "مجلد" if item_path.is_dir() else "ملف"\n    print(f"- {item_path.name} ({item_type})")\n\n# لو عايز تدور على ملفات بنمط معين (مثلاً كل ملفات .txt)\nprint("\\nملفات txt في المجلد الحالي:")\nfor txt_file in target_dir_to_list.glob("*.txt"): # glob بتدعم أنماط زي بتاعة الـ shell\n    print(f"- {txt_file.name}")\n\n# لو عايز تدور في المجلد وكل المجلدات الفرعية اللي جواه (Recursive)\n# for py_file_recursive in target_dir_to_list.rglob("*.py"):\n# print(f"- {py_file_recursive}")\n\n# باستخدام os\n# print("\\nمحتويات باستخدام os.listdir():")\n# for item_name in os.listdir("."): # listdir بترجع قايمة بأسماء الملفات والمجلدات (كنصوص)\n#     full_path_str = os.path.join(".", item_name) # لازم تعمل المسار الكامل عشان تعرف هو ملف ولا مجلد\n#     item_type_os = "مجلد" if os.path.isdir(full_path_str) else "ملف"\n#     print(f"- {item_name} ({item_type_os})")' },
      { type: 'subheading', text: '5. قراءة وكتابة الملفات (باستخدام `pathlib`):' },
      { type: 'paragraph', text: 'كائنات `Path` بتسهل كمان عمليات القراءة والكتابة البسيطة من غير ما تحتاج تستخدم `open()` بشكل صريح كل مرة (هي بتستخدمها في الخلفية).'},
      { type: 'code', language: 'python', text: 'my_pathlib_file = Path("pathlib_example.txt")\n\ntry:\n    # كتابة نص للملف (هتعمل overwrite لو الملف موجود)\n    my_pathlib_file.write_text("أهلاً من pathlib!\\nسطر جديد.", encoding="utf-8")\n    print(f"تمت الكتابة في {my_pathlib_file}")\n\n    # قراءة النص من الملف\n    content_read = my_pathlib_file.read_text(encoding="utf-8")\n    print(f"محتوى {my_pathlib_file}:\\n{content_read}")\n\n    # لو عايز تتعامل مع ملفات ثنائية (bytes)\n    # my_pathlib_file.write_bytes(b"some binary data")\n    # binary_content = my_pathlib_file.read_bytes()\nexcept Exception as e:\n    print(f"خطأ في التعامل مع الملف بـ pathlib: {e}")' },
      { type: 'subheading', text: '6. حذف الملفات والمجلدات:' },
      { type: 'code', language: 'python', text: 'file_to_delete = Path("pathlib_example.txt")\ndir_to_delete = Path("bod_code_test_dir/another_subdir")\nparent_dir_to_delete_if_empty = Path("bod_code_test_dir")\n\ntry:\n    if file_to_delete.exists():\n        file_to_delete.unlink() # لحذف ملف (unlink بتشيل الـ link للملف)\n        print(f"تم حذف الملف: {file_to_delete}")\n    else:\n        print(f"الملف {file_to_delete} مش موجود عشان يتحذف.")\n    \n    if dir_to_delete.exists():\n        dir_to_delete.rmdir() # لحذف مجلد (لازم يكون فاضي)\n        print(f"تم حذف المجلد: {dir_to_delete}")\n    else:\n        print(f"المجلد {dir_to_delete} مش موجود عشان يتحذف.")\n    \n    # نحاول نحذف المجلد الأب لو بقى فاضي\n    if parent_dir_to_delete_if_empty.exists() and not any(parent_dir_to_delete_if_empty.iterdir()):\n      parent_dir_to_delete_if_empty.rmdir()\n      print(f"تم حذف المجلد الأب الفارغ: {parent_dir_to_delete_if_empty}")\n\nexcept OSError as e:\n    print(f"خطأ في الحذف (يمكن المجلد مش فاضي أو مفيش صلاحيات): {e}")\n\n# باستخدام os\n# os.remove("file.txt") # لحذف ملف\n# os.rmdir("empty_dir") # لحذف مجلد فاضي\n# import shutil\n# shutil.rmtree("dir_with_contents") # لحذف مجلد بكل اللي جواه (خلي بالك جداً مع دي!)' },
      { type: 'paragraph', text: 'موديول `pathlib` بيقدم طريقة حديثة ومرنة جداً للتعامل مع نظام الملفات في بايثون. بيخلي الكود بتاعك أسهل في القراءة والكتابة، وبيجنبك كتير من المشاكل اللي كانت ممكن تحصل مع موديول `os` (زي التعامل مع الشرطة المائلة `\` و `/` في أنظمة التشغيل المختلفة). حاول تستخدمه في مشاريعك الجديدة!'}
    ],
    quiz: [
      { id: 'q_fs_1', text: 'أي موديول في بايثون يقدم طريقة أحدث وشيئية (object-oriented) للتعامل مع مسارات الملفات والمجلدات؟', options: ['`os`', '`sys`', '`pathlib`', '`files`'], correctAnswerIndex: 2, explanation: '`pathlib` هو الموديول الأحدث المفضل للتعامل مع المسارات بطريقة شيئية.' },
      { id: 'q_fs_2', text: 'باستخدام `pathlib`، كيف يمكنك الحصول على المسار المطلق (absolute path) لكائن `Path` اسمه `p`؟', options: ['`p.absolute()`', '`p.resolve()`', '`p.full_path()`', '`abs(p)`'], correctAnswerIndex: 1, explanation: '`p.resolve()` تعيد المسار المطلق بعد حل أي روابط رمزية (symlinks).' },
      { id: 'q_fs_3', text: 'ما هي الدالة من `pathlib.Path` التي تستخدم للتحقق مما إذا كان المسار يشير إلى ملف موجود؟', options: ['`path.exists_file()`', '`path.is_file()`', '`path.check_file()`', '`path.isfile()` (هذه من os.path، لكن `is_file()` هي الطريقة في `Path`)'], correctAnswerIndex: 1, explanation: '`path_object.is_file()` تتحقق مما إذا كان المسار موجودًا وهو ملف.' },
      { id: 'q_fs_4', text: 'لإنشاء مجلد جديد باستخدام `pathlib`، مع إنشاء كل المجلدات الأصل (parent directories) الناقصة إذا لزم الأمر وعدم إثارة خطأ إذا كان المجلد موجودًا بالفعل، أي أمر تستخدم؟', options: ['`my_path.mkdir()`', '`my_path.mkdir(parents=True, exist_ok=True)`', '`my_path.create_dir(recursive=True)`', '`os.makedirs(my_path, exist_ok=True)` (هذه لـ os، السؤال عن pathlib)'], correctAnswerIndex: 1, explanation: '`my_path.mkdir(parents=True, exist_ok=True)` هي الطريقة الصحيحة.' },
      { id: 'q_fs_5', text: 'أي دالة من `pathlib.Path` تستخدم لسرد محتويات مجلد (كائنات `Path` للملفات والمجلدات الفرعية مباشرة)؟', options: ['`path.listdir()`', '`path.contents()`', '`path.iterdir()`', '`path.glob("*")` (هذه تعيد مُكرِّرًا مطابقًا للنمط، `iterdir` هو الأنسب للسرد المباشر)'], correctAnswerIndex: 2, explanation: '`path_object.iterdir()` تعيد مُكرِّرًا بجميع العناصر داخل المجلد.' }
    ]
  },
  {
    id: 'l2-lesson-14',
    slug: 'pythonic-iteration',
    title: 'التكرار البايثوني: `zip` و `enumerate`',
    description: 'اكتشف أدوات التكرار المفيدة مثل `zip` للمرور على عدة تسلسلات معًا، و `enumerate` للحصول على الفهرس والعنصر أثناء التكرار.',
    content: [
      { type: 'heading', text: 'لف ودوران بأسلوب بايثوني: `zip` و `enumerate`' },
      { type: 'paragraph', text: 'بايثون مشهور بإن كوده بيكون "بايثوني" (Pythonic)، يعني مكتوب بطريقة بتستغل مميزات اللغة عشان يكون واضح ومختصر وفعال. لما بنيجي نعمل حلقات تكرار (loops)، فيه أدوات مدمجة بتساعدنا نكتب كود بايثوني أكتر، ومن أهمهم `zip` و `enumerate`.' },
      { type: 'subheading', text: '1. `enumerate()`: لما تحتاج الفهرس والقيمة مع بعض' },
      { type: 'paragraph', text: 'كتير أوي واحنا بنلف على قايمة أو أي حاجة قابلة للتكرار (iterable)، بنكون عايزين نعرف الفهرس (الترتيب) بتاع العنصر الحالي بالإضافة لقيمته. الطريقة التقليدية إننا نعمل عداد (counter) ونزوده كل لفة:'},
      { type: 'code', language: 'python', text: '# الطريقة التقليدية (مش بايثونية أوي)\nmy_list = ["تفاح", "موز", "برتقال"]\nindex = 0\nfor fruit in my_list:\n    print(f"الفهرس {index}: {fruit}")\n    index += 1' },
      { type: 'paragraph', text: 'دالة `enumerate()` بتسهل الموضوع ده جداً. هي بتاخد iterable كـ argument، وبترجع مُكرِّر (iterator) بيطلعلك في كل لفة tuple فيه الفهرس (بيبدأ من 0 افتراضياً) والعنصر المقابل ليه.'},
      { type: 'code', language: 'python', text: '# باستخدام enumerate()\nmy_list = ["تفاح", "موز", "برتقال"]\n\nfor index, fruit in enumerate(my_list):\n    print(f"الفهرس {index}: {fruit}")\n\n# ممكن كمان تحدد قيمة بداية للفهرس (start index)\nfor i, item in enumerate(my_list, start=1): # هيبدأ العد من 1\n    print(f"رقم العنصر {i}: {item}")' },
      { type: 'subheading', text: '2. `zip()`: لما تلف على كذا حاجة مع بعض في نفس الوقت' },
      { type: 'paragraph', text: 'ساعات بيكون عندك كذا قايمة (أو أي iterables) وعايز تلف عليهم كلهم مع بعض، وتاخد في كل لفة عنصر من كل قايمة بالترتيب. مثلاً، عندك قايمة أسماء وقايمة أعمار مقابلة ليها.'},
      { type: 'paragraph', text: 'دالة `zip()` بتعمل كده بالظبط. هي بتاخد أي عدد من الـ iterables كـ arguments، وبترجع مُكرِّر بيطلعلك في كل لفة tuple فيه العناصر المقابلة من كل iterable.'},
      { type: 'paragraph', text: '`zip()` بتقف لما أقصر iterable من اللي إنت مديهم لها يخلص.'},
      { type: 'code', language: 'python', text: 'names = ["أحمد", "سارة", "علي"]\nages = [25, 30, 22]\ncities = ["القاهرة", "جدة", "دبي", "بيروت"] # فيها عنصر زيادة\n\nfor name, age, city in zip(names, ages, cities):\n    # اللفة هتشتغل 3 مرات بس (لأن أقصر قايمة طولها 3)\n    # "بيروت" مش هتظهر\n    print(f"{name} عنده {age} سنة وساكن في {city}.")\n\n# لو الـ iterables مش نفس الطول و عايز تكمل لحد أطول واحد،\n# ممكن تستخدم itertools.zip_longest() (بتحط None للعناصر الناقصة افتراضياً)\nfrom itertools import zip_longest\n\nfor name, age, city in zip_longest(names, ages, cities, fillvalue="N/A"):\n    print(f"الاسم: {name or \'N/A\'}, العمر: {age or \'N/A\'}, المدينة: {city or \'N/A\'}")' },
      { type: 'subheading', text: 'فك الـ zip (Unzipping):' },
      { type: 'paragraph', text: 'ممكن تعمل عكس عملية `zip` لو عندك قايمة من الـ tuples وعايز تفصلهم لكذا tuple منفصل. بتستخدم `zip()` مع علامة النجمة `*` (اللي بتعمل unpacking).'},
      { type: 'code', language: 'python', text: 'zipped_data = [("أ", 1), ("ب", 2), ("ج", 3)]\n\nletters, numbers = zip(*zipped_data)\n\nprint(f"الحروف: {letters}") # (\'أ\', \'ب\', \'ج\')\nprint(f"الأرقام: {numbers}") # (1, 2, 3)' },
      { type: 'paragraph', text: '`enumerate()` و `zip()` أدوات بسيطة بس قوية جداً بتخلي كود التكرار بتاعك أنضف وأوضح وأكثر بايثونية. حاول تستخدمهم كل ما تلاقي نفسك محتاج عداد يدوي أو بتلف على كذا قايمة بالتوازي.'}
    ],
    quiz: [
      { id: 'q_pyiter_1', text: 'ما هي وظيفة دالة `enumerate(iterable)`؟', options: ['تعد عدد العناصر في الـ iterable', 'تعيد مُكرِّرًا ينتج أزواجًا من الفهرس والقيمة لكل عنصر في الـ iterable', 'تجمع عناصر الـ iterable في سلسلة نصية واحدة', 'تحذف العناصر المكررة من الـ iterable'], correctAnswerIndex: 1, explanation: '`enumerate` تعطي الفهرس والقيمة معًا أثناء التكرار.' },
      { id: 'q_pyiter_2', text: 'إذا كانت `my_list = ["a", "b"]`، فماذا سيكون ناتج حلقة `for index, value in enumerate(my_list, start=1): print(index, value)`؟', options: ['`0 a` ثم `1 b`', '`1 a` ثم `2 b`', '`a 1` ثم `b 2`', '`(1, "a")` ثم `(2, "b")`'], correctAnswerIndex: 1, explanation: '`start=1` تجعل الفهرسة تبدأ من 1. سيطبع كل زوج في سطر منفصل.' },
      { id: 'q_pyiter_3', text: 'ماذا تفعل دالة `zip(iter1, iter2, ...)`؟', options: ['تضغط الملفات المحددة', 'تعيد مُكرِّرًا ينتج صفوفًا (tuples) حيث يحتوي كل صف على العناصر المتناظرة من كل iterable مُدخل، وتتوقف عند أقصر iterable', 'تفك ضغط ملف واحد فقط', 'تجمع كل العناصر من كل الـ iterables في قائمة واحدة'], correctAnswerIndex: 1, explanation: '`zip` تجمع العناصر المتناظرة من عدة iterables وتتوقف عند أقصرها.' },
      { id: 'q_pyiter_4', text: 'إذا كانت `list1 = [1, 2]` و `list2 = ["x", "y", "z"]`، فماذا سيكون ناتج `list(zip(list1, list2))`؟', options: ['`[(1, "x"), (2, "y"), (None, "z")]`', '`[(1, "x"), (2, "y")]`', '`[(1, 2), ("x", "y", "z")]`', 'خطأ، لأن القائمتين ليستا بنفس الطول'], correctAnswerIndex: 1, explanation: '`zip` تتوقف عند انتهاء أقصر iterable، لذا ستأخذ فقط أول عنصرين من `list2`.' },
      { id: 'q_pyiter_5', text: 'إذا كان لديك `pairs = [("a", 1), ("b", 2)]`، كيف يمكنك "فك" هذه القائمة إلى قائمتين منفصلتين `letters` و `numbers` باستخدام `zip`؟', options: ['`letters, numbers = unzip(pairs)`', '`letters = pairs[0]; numbers = pairs[1]`', '`letters, numbers = zip(*pairs)`', '`letters = [p[0] for p in pairs]; numbers = [p[1] for p in pairs]` (هذه طريقة صحيحة ولكن السؤال عن استخدام zip للفك)'], correctAnswerIndex: 2, explanation: 'استخدام `zip(*iterable_of_tuples)` هو الطريقة "البايثونية" لفك التجميع.' }
    ]
  },
  {
    id: 'l2-lesson-15',
    slug: 'pip-virtual-environments',
    title: 'مقدمة إلى PIP والبيئات الافتراضية (`venv`)',
    description: 'تعلم كيفية استخدام `pip` (مدير حزم بايثون) لتثبيت وإدارة المكتبات الخارجية، وأهمية البيئات الافتراضية (`venv`) لعزل اعتماديات كل مشروع.',
    content: [
      { type: 'heading', text: 'عدة الشغل بتاعتك: `pip` والبيئات الافتراضية `venv`' },
      { type: 'paragraph', text: 'بايثون لغة قوية جداً، وجزء كبير من قوتها بييجي من "المجتمع" الضخم بتاعها والمكتبات (Libraries/Packages) الكتير جداً اللي المبرمجين التانيين عملوها وخلوها متاحة لينا عشان نستخدمها. المكتبات دي بتوفر وظايف جاهزة لحاجات كتير (زي التعامل مع الويب، تحليل البيانات، الذكاء الاصطناعي، إلخ) بدل ما نضطر نعمل كل حاجة من الصفر.' },
      { type: 'subheading', text: '1. `pip`: مدير حزم بايثون' },
      { type: 'paragraph', text: '`pip` (اختصار لـ "Pip Installs Packages" أو "Preferred Installer Program") هو الأداة الرسمية اللي بنستخدمها عشان نثبت وندير المكتبات الخارجية دي في بايثون. `pip` عادةً بييجي متثبت مع بايثون (من إصدار 3.4+).'},
      { type: 'list', text: 'أشهر أوامر `pip` (بتتكتب في الترمنال/Command Prompt):', items:[
        '`pip install package_name`: بيثبت أحدث إصدار من المكتبة اللي اسمها `package_name` من مستودع الحزم الرسمي لبايثون (PyPI - Python Package Index).',
        '`pip install package_name==1.2.3`: بيثبت إصدار معين (هنا 1.2.3) من المكتبة.',
        '`pip install "package_name>=1.0.0"`: بيثبت إصدار 1.0.0 أو أحدث.',
        '`pip uninstall package_name`: بيحذف المكتبة دي.',
        '`pip list`: بيعرضلك قايمة بكل المكتبات المتثبتة في بيئة بايثون الحالية وإصداراتها.',
        '`pip show package_name`: بيعرض معلومات تفصيلية عن مكتبة معينة متثبتة.',
        '`pip search query`: بيبحث عن مكتبات على PyPI اسمها أو وصفها فيه الكلمة `query`. (ممكن يكون الأمر ده مبقاش مدعوم أوي في الإصدارات الجديدة من pip، والأفضل تبحث مباشرة على موقع pypi.org).',
        '`pip freeze > requirements.txt`: بيعمل ملف اسمه `requirements.txt` فيه قايمة بكل المكتبات المتثبتة حالياً وإصداراتها بالظبط. ده مفيد جداً عشان لو حد تاني عايز يشغل مشروعك، يقدر يثبت نفس المكتبات بنفس الإصدارات بسهولة.',
        '`pip install -r requirements.txt`: بيقرا ملف `requirements.txt` ويثبت كل المكتبات اللي جواه.'
      ]},
      { type: 'code', language: 'text', text: '# مثال لتثبيت مكتبة requests (مشهورة لعمل طلبات ويب)\npip install requests\n\n# مثال لتثبيت إصدار معين من مكتبة تانية\n# pip install numpy==1.20.3\n\n# لعرض المكتبات المثبتة\npip list' },
      { type: 'subheading', text: '2. أهمية البيئات الافتراضية (Virtual Environments):' },
      { type: 'paragraph', text: 'تخيل إنك شغال على مشروعين بايثون في نفس الوقت. المشروع الأولاني محتاج إصدار معين من مكتبة (مثلاً `LibraryX v1.0`)، والمشروع التاني محتاج إصدار تاني مختلف من نفس المكتبة (مثلاً `LibraryX v2.0`). لو ثبت المكتبات دي كلها في مكان واحد "عام" (Global Python environment)، هيحصل تضارب وممكن واحد من المشروعين (أو الاتنين) م يشتغلش صح.'},
      { type: 'paragraph', text: 'هنا بتيجي فايدة "البيئات الافتراضية" (Virtual Environments). البيئة الافتراضية بتعمل مكان "معزول" لكل مشروع بايثون، بيكون ليه نسخة بايثون خاصة بيه (أو بيستخدم النسخة العامة بس بشكل معزول) ومجموعة مكتبات خاصة بيه بس. كده كل مشروع يقدر يستخدم الإصدارات اللي هو محتاجها من المكتبات من غير ما يأثر على المشاريع التانية.'},
      { type: 'paragraph', text: 'دي عادة كويسة جداً إنك تعمل بيئة افتراضية لكل مشروع بايثون بتبدأه.'},
      { type: 'subheading', text: '3. استخدام `venv` (الموديول المدمج لعمل البيئات الافتراضية):' },
      { type: 'paragraph', text: 'بايثون بييجي معاه موديول اسمه `venv` عشان نعمل بيه بيئات افتراضية (من بايثون 3.3+).'},
      { type: 'list', text: 'خطوات عمل واستخدام بيئة افتراضية بـ `venv`:', items:[
        '1. **إنشاء البيئة الافتراضية:** افتح الترمنال، روح للمجلد بتاع مشروعك، واكتب الأمر التالي (هنسمي مجلد البيئة الافتراضية `myenv`، ممكن تسميه أي حاجة تانية زي `.venv` أو `env`):',
        '   `python -m venv myenv` (أو `python3 -m venv myenv` لو `python` بيشاور على بايثون 2 عندك).',
        '   الأمر ده هيعمل مجلد جديد اسمه `myenv` جواه ملفات البيئة الافتراضية.',
        '2. **تفعيل البيئة الافتراضية (Activate):** عشان تبدأ تستخدم البيئة دي، لازم "تفعلها". طريقة التفعيل بتختلف حسب نظام التشغيل:',
        '   - **ويندوز (Command Prompt):** `myenv\\Scripts\\activate.bat`',
        '   - **ويندوز (PowerShell):** `myenv\\Scripts\\Activate.ps1` (ممكن تحتاج تظبط الـ Execution Policy في PowerShell لو الأمر ده معملش حاجة).',
        '   - **ماك أو لينكس (bash/zsh):** `source myenv/bin/activate`',
        '   لما البيئة بتتفعل، عادةً بتلاقي اسم البيئة (`myenv`) ظهر قبل البرومبت بتاع الترمنال بتاعك.',
        '3. **تثبيت المكتبات:** دلوقتي أي مكتبة هتثبتها باستخدام `pip install` هتتثبت جوه البيئة الافتراضية دي بس، ومش هتأثر على بايثون العام أو أي مشاريع تانية.',
        '   `pip install requests numpy pandas` (كمثال)',
        '4. **تعطيل البيئة الافتراضية (Deactivate):** لما تخلص شغل على المشروع وعايز ترجع للبيئة العامة، اكتب الأمر `deactivate` في الترمنال. الأمر ده بيكون متاح لما تكون البيئة مفعلة.'
      ]},
      { type: 'paragraph', text: 'من العادات الكويسة إنك تضيف اسم مجلد البيئة الافتراضية (زي `myenv/` أو `.venv/`) لملف `.gitignore` بتاع مشروعك عشان متترفعش على GitHub أو أي نظام Version Control.'},
      { type: 'paragraph', text: 'فيه أدوات تانية لإدارة البيئات الافتراضية والمكتبات زي `conda` (خصوصاً لو بتشتغل في علم البيانات) و `Poetry` و `PDM` اللي بيقدموا مميزات أكتر، بس `venv` و `pip` هما الأساس وبيكفوا لمعظم المشاريع.'},
      { type: 'paragraph', text: 'استخدام `pip` لإدارة مكتباتك الخارجية، وعمل بيئة افتراضية لكل مشروع، هيخلي حياتك كمبرمج بايثون أسهل وأنظم بكتير وهيجنبك مشاكل كتير ليها علاقة بتضارب الإصدارات والاعتماديات.'}
    ],
    quiz: [
      { id: 'q_pipvenv_1', text: 'ما هي الأداة التي تستخدم عادةً في بايثون لتثبيت وإدارة المكتبات (الحزم) الخارجية من PyPI؟', options: ['`python-get`', '`conda` (أداة شائعة ولكن ليست الوحيدة أو الافتراضية دائمًا)', '`pip`', '`setup.py` (يستخدم لوصف الحزمة، ليس لتثبيت حزم أخرى بشكل مباشر)'], correctAnswerIndex: 2, explanation: '`pip` هو مدير الحزم القياسي لبايثون.' },
      { id: 'q_pipvenv_2', text: 'ما هو الغرض الرئيسي من استخدام البيئات الافتراضية (Virtual Environments) في بايثون؟', options: ['لتسريع تنفيذ برامج بايثون', 'لعزل اعتماديات (مكتبات وإصداراتها) كل مشروع عن المشاريع الأخرى والبيئة العامة لبايثون', 'لضغط ملفات المشروع لتقليل حجمها', 'لترجمة كود بايثون إلى لغة الآلة'], correctAnswerIndex: 1, explanation: 'البيئات الافتراضية توفر العزل بين المشاريع المختلفة لتجنب تضارب الاعتماديات.' },
      { id: 'q_pipvenv_3', text: 'ما هو الموديول المدمج في بايثون (منذ 3.3+) الذي يستخدم لإنشاء البيئات الافتراضية؟', options: ['`virtualenv` (مكتبة خارجية شائعة)', '`conda`', '`venv`', '`isolate`'], correctAnswerIndex: 2, explanation: '`venv` هو الموديول المدمج في المكتبة القياسية لإنشاء البيئات الافتراضية.' },
      { id: 'q_pipvenv_4', text: 'بعد إنشاء بيئة افتراضية باسم `my_env` باستخدام `venv`، ما هو الأمر الذي تستخدمه عادةً لتفعيلها على نظام لينكس أو ماك (باستخدام bash)؟', options: ['`activate my_env`', '`my_env/bin/start`', '`source my_env/bin/activate`', '`run my_env`'], correctAnswerIndex: 2, explanation: '`source my_env/bin/activate` هو الأمر الشائع لتفعيل البيئة على أنظمة يونكس.' },
      { id: 'q_pipvenv_5', text: 'ما هو الأمر الذي يستخدم لإنشاء ملف `requirements.txt` يحتوي على قائمة بالمكتبات المثبتة حاليًا في البيئة النشطة وإصداراتها؟', options: ['`pip save > requirements.txt`', '`pip list --export > requirements.txt`', '`pip freeze > requirements.txt`', '`pip requirements > requirements.txt`'], correctAnswerIndex: 2, explanation: '`pip freeze > requirements.txt` هو الأمر المستخدم لتصدير قائمة الاعتماديات.' }
    ]
  }
];
