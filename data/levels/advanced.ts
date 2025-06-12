import { Lesson } from '../../types';

export const advancedLessons: Lesson[] = [
  {
    id: 'l3-lesson-1',
    slug: 'decorators',
    title: 'المُزخرفات (Decorators) في بايثون',
    description: 'تعلم كيف تستخدم المُزخرفات لإضافة وظائف جديدة للدوال أو الأصناف بطريقة ديناميكية وقابلة لإعادة الاستخدام.',
    content: [
      { type: 'heading', text: 'المُزخرفات: تزيين الدوال بوظائف إضافية!' },
      { type: 'paragraph', text: 'المُزخرف (Decorator) في بايثون ده طريقة شيك عشان تعدل أو تزود سلوك لدالة أو صنف من غير ما تغير الكود الأصلي بتاعهم بشكل مباشر. تخيل إنك بتلبس جاكيت لدالة، الجاكيت ده بيضيفلها ميزة جديدة!' },
      { type: 'paragraph', text: 'عشان نفهم المُزخرفات كويس، لازم نفتكر إن الدوال في بايثون "مواطنين من الدرجة الأولى" (First-class citizens). ده معناه إنك ممكن تعامل الدالة زي أي متغير تاني: ممكن تمررها كـ argument لدالة تانية، ممكن ترجعها من دالة تانية، وممكن تخزنها في متغير.'},
      { type: 'subheading', text: 'بناء المُزخرف البسيط:' },
      { type: 'paragraph', text: 'المُزخرف في أبسط صوره هو دالة بتاخد دالة تانية كـ argument (الدالة اللي عايزين نزخرفها)، وبتعرف جواها دالة جديدة (بنسميها الـ wrapper function). الـ wrapper دي هي اللي بتضيف السلوك الجديد، وبعدين ممكن تستدعي الدالة الأصلية. في الآخر، المُزخرف بيرجع الـ wrapper function دي.'},
      { type: 'code', language: 'python', text:
`def my_decorator(func):  # func هي الدالة اللي عايزين نزخرفها
    def wrapper(*args, **kwargs): # *args, **kwargs عشان الـ wrapper تقدر تستقبل أي arguments
        print("حاجة بتحصل قبل ما الدالة الأصلية تشتغل.")
        result = func(*args, **kwargs) # بنستدعي الدالة الأصلية
        print("حاجة بتحصل بعد ما الدالة الأصلية خلصت.")
        return result # بنرجع نتيجة الدالة الأصلية
    return wrapper # المُزخرف بيرجع الـ wrapper

# طريقة استخدام المُزخرف
def say_whee():
    print("Whee!")

say_whee_decorated = my_decorator(say_whee)
say_whee_decorated()
# الناتج:
# حاجة بتحصل قبل ما الدالة الأصلية تشتغل.
# Whee!
# حاجة بتحصل بعد ما الدالة الأصلية خلصت.`
      },
      { type: 'subheading', text: 'استخدام علامة `@` (Syntax Sugar):' },
      { type: 'paragraph', text: 'بايثون بتقدملك طريقة أسهل وأشيك عشان تطبق المُزخرف على دالة، وهي إنك تحط اسم المُزخرف فوق تعريف الدالة اللي عايز تزخرفها، وقبله علامة `@`.'},
      { type: 'code', language: 'python', text:
`@my_decorator  # دي بالظبط زي ما عملنا: say_hello = my_decorator(say_hello)
def say_hello(name):
    print(f"أهلاً يا {name}!")

say_hello("Bod Code")
# الناتج:
# حاجة بتحصل قبل ما الدالة الأصلية تشتغل.
# أهلاً يا Bod Code!
# حاجة بتحصل بعد ما الدالة الأصلية خلصت.`
      },
      { type: 'subheading', text: 'الحفاظ على بيانات الدالة الأصلية مع `functools.wraps`:' },
      { type: 'paragraph', text: 'لما بتستخدم مُزخرف، الدالة اللي بترجع (الـ wrapper) بتحل محل الدالة الأصلية. ده ممكن يضيع شوية معلومات مهمة عن الدالة الأصلية زي اسمها والـ docstring بتاعها. عشان نحل المشكلة دي، بنستخدم مُزخرف تاني جاهز اسمه `wraps` من موديول `functools`.'},
      { type: 'code', language: 'python', text:
`import functools

def better_decorator(func):
    @functools.wraps(func) # هنا بنستخدم wraps
    def wrapper(*args, **kwargs):
        print("Wrapper: قبل التنفيذ")
        result = func(*args, **kwargs)
        print("Wrapper: بعد التنفيذ")
        return result
    return wrapper

@better_decorator
def greet_user(username):
    """دالة ترحيب بسيطة."""
    print(f"مرحباً، {username}!")

print(greet_user.__name__)    # هيطبع: greet_user (بدون wraps كان هيطبع wrapper)
print(greet_user.__doc__)     # هيطبع: دالة ترحيب بسيطة. (بدون wraps كان هيطبع None أو الـ docstring بتاع الـ wrapper)`
      },
      { type: 'subheading', text: 'أمثلة عملية للمُزخرفات:' },
      { type: 'list', text:'بعض الاستخدامات الشائعة:', items:[
        'تسجيل الأحداث (Logging): نطبع رسالة كل مرة الدالة بتشتغل.',
        'قياس وقت التنفيذ (Timing): نحسب الدالة خدت وقت قد إيه عشان تتنفذ.',
        'التحقق من الصلاحيات (Authorization): نتأكد إن المستخدم ليه حق ينفذ الدالة دي.',
        'التخزين المؤقت (Caching): نحفظ نتيجة الدالة عشان لو اتطلبت بنفس الـ arguments تاني نرجعها بسرعة من غير ما نحسبها تاني.'
      ]},
      { type: 'paragraph', text: 'المُزخرفات أداة قوية جداً بتخلي كودك أكثر مرونة وقابلية لإعادة الاستخدام. ممكن تبدو معقدة في الأول، لكن مع الممارسة هتلاقيها مفيدة جداً.'}
    ],
    quiz: [
      { id: 'adv_dec_1', text: 'ما هو الغرض الرئيسي من استخدام المُزخرف (Decorator) في بايثون؟', options: ['لجعل الكود أبطأ', 'لتعديل أو إضافة سلوك لدالة أو صنف دون تغيير الكود الأصلي مباشرة', 'لحذف الدوال غير المستخدمة', 'لإنشاء متغيرات عامة'], correctAnswerIndex: 1, explanation: 'المُزخرفات تسمح بتغليف وظائف إضافية حول دالة أو صنف موجود.' },
      { id: 'adv_dec_2', text: 'عند بناء مُزخرف، ما الذي يجب أن يرجعه المُزخرف عادةً؟', options: ['الدالة الأصلية كما هي', 'قيمة `None`', 'الدالة الـ wrapper الداخلية', 'سلسلة نصية تشرح المُزخرف'], correctAnswerIndex: 2, explanation: 'المُزخرف يجب أن يرجع الدالة الـ wrapper التي تحتوي على السلوك الجديد والدعوة للدالة الأصلية.' },
      { id: 'adv_dec_3', text: 'ما هي فائدة استخدام `@functools.wraps` داخل المُزخرف؟', options: ['لجعل المُزخرف أسرع', 'لإضافة تعليقات تلقائية للكود', 'للحفاظ على بيانات الدالة الأصلية (مثل الاسم والـ docstring) في الدالة المُزخرفة', 'لحذف الدالة الأصلية بعد الزخرفة'], correctAnswerIndex: 2, explanation: '`@functools.wraps` يساعد في الحفاظ على الـ metadata الخاص بالدالة الأصلية.' },
      { id: 'adv_dec_4', text: 'إذا كان لديك مُزخرف اسمه `my_deco`، كيف يمكنك تطبيقه على دالة `my_func` باستخدام الصيغة المختصرة؟', options: ['`apply my_deco to my_func`', '`my_func = my_deco(my_func)`', '`@my_deco` فوق تعريف `my_func`', '`decorate(my_func, with=my_deco)`'], correctAnswerIndex: 2, explanation: 'علامة `@` متبوعة باسم المُزخرف هي الصيغة المختصرة (syntax sugar) لتطبيق المُزخرف.' },
      { id: 'adv_dec_5', text: 'ماذا يعني أن الدوال في بايثون "مواطنين من الدرجة الأولى"؟', options: ['أنها أهم جزء في البرنامج', 'أنها لا يمكن تعديلها', 'أنها يمكن معاملتها كأي قيمة أخرى (تمريرها، إرجاعها، تخزينها في متغيرات)', 'أنها تنفذ قبل أي كود آخر'], correctAnswerIndex: 2, explanation: 'كون الدوال مواطنين من الدرجة الأولى هو أساس عمل المُزخرفات، حيث يمكن تمريرها كـ arguments وإرجاعها.' }
    ]
  },
  {
    id: 'l3-lesson-2',
    slug: 'generators-iterators',
    title: 'المُولدات (Generators) والمُكررات (Iterators)',
    description: 'اكتشف كيف تعمل المُكررات والمُولدات في بايثون، ولماذا هي ضرورية للتعامل مع مجموعات كبيرة من البيانات بكفاءة.',
    content: [
      { type: 'heading', text: 'التعامل الذكي مع البيانات: المُكررات والمُولدات' },
      { type: 'paragraph', text: 'تخيل إنك محتاج تتعامل مع سلسلة طويلة جداً من البيانات، ممكن تكون ملايين الأرقام أو سطور في ملف ضخم. لو حاولت تخزن كل البيانات دي في الذاكرة مرة واحدة (مثلاً في قايمة)، ممكن الذاكرة متكفيش والبرنامج يضرب! هنا بيجي دور المُكررات (Iterators) والمُولدات (Generators) عشان يخلونا نتعامل مع البيانات دي بشكل "كسول" (Lazy)، يعني عنصر بعنصر وعند الحاجة بس.' },
      { type: 'subheading', text: 'بروتوكول التكرار (Iteration Protocol):' },
      { type: 'paragraph', text: 'في بايثون، عشان أي كائن يعتبر "قابل للتكرار" (Iterable) - يعني ينفع نستخدمه في حلقة `for` - لازم يحقق بروتوكول معين. الكائنات القابلة للتكرار (زي القوائم والنصوص والقواميس) بيكون عندها دالة خاصة اسمها `__iter__()`. الدالة دي لما بنستدعيها بترجع "مُكرِّر" (Iterator).' },
      { type: 'paragraph', text: 'المُكرِّر نفسه بيكون عنده دالة خاصة اسمها `__next__()`. كل مرة بنستدعي `__next__()` على المُكرِّر، بيرجعلنا العنصر التالي في السلسلة. لو مفيش عناصر تانية، المُكرِّر بيثير (raises) استثناء (exception) اسمه `StopIteration` عشان يقول إن التكرار خلص.'},
      { type: 'code', language: 'python', text:
`my_list = [1, 2, 3]\n\n# my_list هي iterable\nmy_iterator = iter(my_list) # iter(my_list) هي نفسها my_list.__iter__()\n\nprint(type(my_iterator)) # <class 'list_iterator'>\n\nprint(next(my_iterator)) # next(my_iterator) هي نفسها my_iterator.__next__() -> 1\nprint(next(my_iterator)) # -> 2\nprint(next(my_iterator)) # -> 3\n# print(next(my_iterator)) # السطر ده هيعمل StopIteration\n\n# حلقة for بتعمل كل ده بشكل تلقائي وبتتعامل مع StopIteration لوحدها.`
      },
      { type: 'subheading', text: 'المُولدات (Generators): طريقة سهلة لعمل مُكررات' },
      { type: 'paragraph', text: 'كتابة مُكرِّر كامل بنفسك (بعمل class فيه `__iter__` و `__next__`) ممكن يكون ممل شوية. المُولدات بتقدملك طريقة أسهل بكتير عشان تعمل مُكررات. فيه طريقتين لعمل المُولدات:'},
      { type: 'paragraph', text: '1. **دوال المُولدات (Generator Functions):** دي دوال عادية بس بدل ما تستخدم `return` عشان ترجع قيمة، بتستخدم كلمة `yield`. لما الدالة بتوصل لكلمة `yield`، بترجع القيمة اللي بعدها، بس في نفس الوقت "بتوقف" تنفيذها مؤقتاً وبتحافظ على حالتها (يعني فاكرة هي وقفت فين والمتغيرات كانت بكام). لما نطلب منها قيمة تاني (عن طريق `next()` أو في حلقة `for`)، بتكمل شغلها من بعد الـ `yield` اللي وقفت عنده لحد ما تلاقي `yield` تانية أو الدالة تخلص.'},
      { type: 'code', language: 'python', text:
`def count_up_to(max_val):\n    print("المولد بدأ!")\n    count = 1\n    while count <= max_val:\n        print(f"قبل الـ yield لـ {count}")\n        yield count # هنا بنرجع قيمة وبنوقف مؤقتاً\n        print(f"بعد الـ yield لـ {count}")\n        count += 1\n    print("المولد خلص!")\n\ncounter_gen = count_up_to(3)\nprint(type(counter_gen)) # <class 'generator'>\n\nprint(f"القيمة الأولى: {next(counter_gen)}")\nprint("-" * 10)\nprint(f"القيمة الثانية: {next(counter_gen)}")\nprint("-" * 10)\nprint(f"القيمة الثالثة: {next(counter_gen)}")\n\n# ممكن نستخدمه في حلقة for عادي\n# for num in count_up_to(2):\n# print(f"من الحلقة: {num}")`
      },
      { type: 'paragraph', text: '2. **تعبيرات المُولدات (Generator Expressions):** دي شبه الـ List Comprehensions بالظبط، بس بدل الأقواس المربعة `[]` بنستخدم أقواس عادية `()`. النتيجة بتكون مُولد، مش قايمة كاملة في الذاكرة.'},
      { type: 'code', language: 'python', text:
`# List comprehension (بتعمل قايمة كاملة في الذاكرة)\nlist_comp = [x*x for x in range(5)]\nprint(f"List Comp: {list_comp}")\n\n# Generator expression (بتعمل مُولد، مش بيحسب القيم إلا عند الطلب)\ngen_exp = (x*x for x in range(5))\nprint(f"Gen Exp: {gen_exp}") # <generator object <genexpr> at ...>\n\nprint("المرور على عناصر المولد:")\nfor val in gen_exp:\n    print(val) # هنا بس بيتم حساب القيم`
      },
      { type: 'subheading', text: 'ليه نستخدم المُولدات؟' },
      { type: 'list', text: 'المزايا الرئيسية:', items:[
        '**كفاءة الذاكرة (Memory Efficiency):** المُولدات مش بتخزن كل العناصر في الذاكرة مرة واحدة. هي بتنتج كل عنصر "عند الطلب" (on the fly). ده بيخليها مثالية للتعامل مع مجموعات بيانات ضخمة جداً ممكن متكفيش في الذاكرة لو عملناها كقايمة.',
        '**التقييم الكسول (Lazy Evaluation):** القيم مش بتتحسب إلا لما تحتاجها. ده ممكن يوفر وقت لو مش محتاج كل القيم في السلسلة.',
        '**التعامل مع تدفقات البيانات (Data Streams):** ممكن تستخدمها لقراءة بيانات من ملفات أو من الشبكة بشكل تدريجي.'
      ]},
      { type: 'paragraph', text: 'مثال: قراءة ملف كبير سطراً بسطر باستخدام مُولد (بايثون بيعمل كده تلقائياً لما تفتح ملف وتعمل عليه حلقة `for`):'},
      { type: 'code', language: 'text', text:
`# تخيل عندك ملف كبير اسمه "large_file.txt"\n# def read_large_file(file_path):\n#     with open(file_path, "r") as f:\n#         for line in f:\n#             yield line.strip() # .strip() عشان تشيل أي مسافات زيادة\n\n# for data_line in read_large_file("large_file.txt"):\n# print(data_line) # كده هتعالج كل سطر لوحده من غير ما تحمل الملف كله في الذاكرة`
      },
      { type: 'paragraph', text: 'المُولدات والمُكررات مفاهيم قوية جداً في بايثون بتساعدك تكتب كود أكثر كفاءة ومرونة، خصوصاً لما تتعامل مع كميات كبيرة من البيانات.'}
    ],
    quiz: [
      { id: 'adv_gen_1', text: 'ما هي الميزة الرئيسية لاستخدام المُولدات (Generators) بدلاً من القوائم (Lists) لمعالجة كميات كبيرة من البيانات؟', options: ['المُولدات أسهل في الكتابة دائماً', 'المُولدات تخزن كل العناصر في الذاكرة مرة واحدة مما يجعل الوصول أسرع', 'المُولدات تنتج العناصر عند الطلب (lazy evaluation) مما يوفر الذاكرة', 'المُولدات تدعم أنواع بيانات أكثر من القوائم'], correctAnswerIndex: 2, explanation: 'المُولدات فعالة من حيث الذاكرة لأنها لا تولد كل العناصر دفعة واحدة.' },
      { id: 'adv_gen_2', text: 'ما هي الكلمة المفتاحية المستخدمة في دالة لإنشاء مُولد (Generator function)؟', options: ['`return`', '`generate`', '`yield`', '`produce`'], correctAnswerIndex: 2, explanation: 'كلمة `yield` هي التي تميز دالة المُولد وتحولها إلى مُولد.' },
      { id: 'adv_gen_3', text: 'عندما تصل دالة المُولد إلى جملة `yield`، ماذا يحدث؟', options: ['تنهي الدالة تنفيذها بالكامل', 'ترجع القيمة وتنهي الدالة', 'ترجع القيمة، توقف تنفيذها مؤقتاً وتحافظ على حالتها، وتستأنف من نفس النقطة عند الطلب التالي', 'تطبع القيمة على الشاشة فقط'], correctAnswerIndex: 2, explanation: '`yield` توقف التنفيذ مؤقتًا وتحافظ على الحالة، مما يسمح بالاستئناف لاحقًا.' },
      { id: 'adv_gen_4', text: 'ما هو الفرق بين تعبير المُولد (Generator expression) مثل `(x*x for x in range(3))` و List comprehension مثل `[x*x for x in range(3)]`؟', options: ['لا يوجد فرق، كلاهما ينتج قائمة', 'تعبير المُولد ينتج مُولد (generator object)، بينما List comprehension تنتج قائمة (list) كاملة في الذاكرة', 'تعبير المُولد أسرع دائمًا', 'List comprehension لا يمكن استخدامها مع الشروط'], correctAnswerIndex: 1, explanation: 'تعبير المُولد يستخدم أقواس دائرية وينتج مُولدًا، بينما List comprehension تستخدم أقواس مربعة وتنتج قائمة.' },
      { id: 'adv_gen_5', text: 'ما هو الاستثناء (Exception) الذي يثيره المُكرِّر (Iterator) عندما لا يتبقى لديه عناصر لتقديمها؟', options: ['`EndOfIteration`', '`StopIteration`', '`NoMoreItemsError`', '`IterationFinished`'], correctAnswerIndex: 1, explanation: '`StopIteration` هو الاستثناء القياسي الذي يشير إلى نهاية التكرار.' }
    ]
  },
  {
    id: 'l3-lesson-3',
    slug: 'advanced-oop',
    title: 'البرمجة الشيئية المتقدمة: الوراثة وتعدد الأوجه',
    description: 'تعمق في مبادئ البرمجة الشيئية المتقدمة مثل الوراثة، التي تسمح للأصناف بأن ترث خصائص وسلوكيات من أصناف أخرى، وتعدد الأوجه.',
    content: [
      { type: 'heading', text: 'توسيع عالم الكائنات: الوراثة وتعدد الأوجه' },
      { type: 'paragraph', text: 'بعد ما عرفنا أساسيات البرمجة الشيئية (الأصناف والكائنات)، هنبدأ نتعمق شوية في مفاهيم متقدمة بتخلي الـ OOP أداة قوية جداً لتنظيم وبناء البرامج الكبيرة والمعقدة. أهم مفهومين هنتكلم عنهم هنا هما الوراثة (Inheritance) وتعدد الأوجه (Polymorphism).' },
      { type: 'subheading', text: '1. الوراثة (Inheritance): بناء عائلات من الأصناف' },
      { type: 'paragraph', text: 'الوراثة بتسمحلك تعمل صنف جديد (بنسميه الصنف الابن - Child Class أو Subclass) بيرث الصفات (Attributes) والأفعال (Methods) من صنف تاني موجود بالفعل (بنسميه الصنف الأب - Parent Class أو Superclass).'},
      { type: 'paragraph', text: 'الفكرة هنا هي "إعادة استخدام الكود" (Code Reusability) وتنظيم الأصناف في تسلسل هرمي. الصنف الابن ممكن يضيف صفات وأفعال جديدة خاصة بيه، أو يعدل (Override) على الأفعال اللي ورثها من أبوه.'},
      { type: 'paragraph', text: 'الصيغة بتاعة الوراثة بسيطة: بنكتب اسم الصنف الأب بين قوسين بعد اسم الصنف الابن في تعريفه.'},
      { type: 'code', language: 'python', text:
`class Animal:  # ده الصنف الأب (Superclass)\n    def __init__(self, name):\n        self.name = name\n        print(f"{self.name} اتولد كـ Animal.")\n\n    def speak(self):\n        # المفروض كل حيوان ليه صوت، بس هنا هنخليها عامة\n        raise NotImplementedError("الصنف الابن لازم يعرف الـ method دي")\n\n    def eat(self):\n        print(f"{self.name} بياكل.")\n\nclass Dog(Animal): # Dog بيرث من Animal (الصنف الابن)\n    def __init__(self, name, breed):\n        super().__init__(name) # بنستدعي الـ __init__ بتاع الصنف الأب (Animal)\n        self.breed = breed\n        print(f"الكلب ده من فصيلة {self.breed}.")\n\n    # إعادة تعريف (Override) للـ method speak\n    def speak(self):\n        return "هاو هاو!"\n\nclass Cat(Animal): # Cat بيرث من Animal\n    def __init__(self, name, color):\n        super().__init__(name) # مهم نستدعي الـ init بتاع الأب\n        self.color = color\n        print(f"القطة دي لونها {self.color}.")\n\n    def speak(self):\n        return "ميااااو!"\n\n# نجرب نعمل كائنات\nmy_dog = Dog("روكي", "جيرمان شيبرد")\nmy_dog.eat() # ورثها من Animal\nprint(f"{my_dog.name} بيقول: {my_dog.speak()}") # استخدم الـ speak بتاعته هو\n\nmy_cat = Cat("لوسي", "أبيض")\nmy_cat.eat()\nprint(f"{my_cat.name} بتقول: {my_cat.speak()}")`
      },
      { type: 'paragraph', text: '**دالة `super()`:** بنستخدمها عشان نستدعي method من الصنف الأب. دي مفيدة جداً عشان نتجنب تكرار الكود اللي موجود بالفعل في الأب، خصوصاً في `__init__`.'},
      { type: 'paragraph', text: '**إعادة تعريف الطرق (Method Overriding):** لما الصنف الابن بيعرف method بنفس اسم method موجودة في الصنف الأب، الـ method بتاعة الابن هي اللي بتشتغل لما نستدعيها على كائن من الصنف الابن. ده بيسمح للابن إنه يقدم سلوك خاص بيه.'},
      { type: 'subheading', text: '2. تعدد الأوجه (Polymorphism): كائنات مختلفة، سلوك واحد' },
      { type: 'paragraph', text: 'تعدد الأوجه كلمة كبيرة معناها "أشكال متعددة". في البرمجة الشيئية، معناها إننا ممكن نتعامل مع كائنات من أصناف مختلفة (بس ليها نفس الأب أو بتحقق نفس "الواجهة" - Interface) بنفس الطريقة، وكل كائن هيتصرف حسب الـ method بتاعته هو.'},
      { type: 'paragraph', text: 'بايثون لغة ديناميكية، فمفهوم تعدد الأوجه فيها بيكون مرن جداً وبيعتمد على مبدأ "Duck Typing" (لو بيمشي زي البطة وبيبطبط زي البطة، يبقى غالباً بطة!). يعني لو كائن عنده الـ method اللي إنت عايز تستدعيها، مش مهم هو من أي صنف بالظبط.'},
      { type: 'code', language: 'python', text:
`# نكمل على مثال الحيوانات اللي فوق\n\ndef animal_sound(animal_object): # الدالة دي بتقبل أي كائن عنده method اسمها speak\n    print(f"صوت الحيوان: {animal_object.speak()}")\n\n# my_dog و my_cat كائنات من أصناف مختلفة، بس الاتنين عندهم speak()\nanimal_sound(my_dog)  # هيطبع: صوت الحيوان: هاو هاو!\nanimal_sound(my_cat)  # هيطبع: صوت الحيوان: ميااااو!\n\nclass Car:\n    def start_engine(self):\n        print("السيارة بدأت تشتغل!")\n\n# لو حاولنا نمرر كائن من صنف Car لدالة animal_sound، هيحصل خطأ\n# لأن Car مفيهاش method اسمها speak()\n# my_car_obj = Car()\n# animal_sound(my_car_obj) # هيعمل AttributeError`
      },
      { type: 'paragraph', text: 'تعدد الأوجه بيخلي الكود بتاعك أكثر مرونة وقابلية للتوسع. ممكن تضيف أصناف جديدة بتحقق نفس "العقد" أو "الواجهة" (يعني عندها نفس الـ methods المطلوبة) من غير ما تحتاج تعدل الكود اللي بيتعامل معاهم.'},
      { type: 'paragraph', text: 'الوراثة وتعدد الأوجه من أقوى المفاهيم في الـ OOP. فهمهم كويس بيفتحلك أبواب لعمل تصميمات برمجية قوية ومرنة.'}
    ],
    quiz: [
      { id: 'adv_oop_1', text: 'ما هو المفهوم الذي يسمح لصنف (Child Class) بأن يكتسب خصائص وسلوكيات صنف آخر (Parent Class)؟', options: ['التغليف (Encapsulation)', 'تعدد الأوجه (Polymorphism)', 'الوراثة (Inheritance)', 'التجريد (Abstraction)'], correctAnswerIndex: 2, explanation: 'الوراثة هي الآلية التي تسمح بصنف بأن يرث من صنف آخر.' },
      { id: 'adv_oop_2', text: 'كيف يتم استدعاء المُنشِئ (`__init__`) الخاص بالصنف الأب من داخل مُنشِئ الصنف الابن في بايثون؟', options: ['`Parent.__init__(self, ...)`', '`super().__init__(...)`', '`self.parent.__init__(...)`', 'لا يمكن استدعاؤه'], correctAnswerIndex: 1, explanation: 'دالة `super()` هي الطريقة الموصى بها لاستدعاء طرق الصنف الأب، بما في ذلك `__init__`.' },
      { id: 'adv_oop_3', text: 'ماذا يحدث إذا قام الصنف الابن بتعريف دالة (method) بنفس اسم دالة موجودة في الصنف الأب؟', options: ['يحدث خطأ في البرنامج', 'يتم تجاهل دالة الصنف الابن ويتم استدعاء دالة الصنف الأب دائمًا', 'يتم إعادة تعريف الدالة (Method Overriding)، ويتم استدعاء نسخة الصنف الابن عند استدعائها على كائن من الصنف الابن', 'يتم دمج الدالتين معًا'], correctAnswerIndex: 2, explanation: 'هذا يسمى إعادة تعريف الدالة (Method Overriding)، حيث يوفر الصنف الابن تطبيقًا خاصًا للدالة الموروثة.' },
      { id: 'adv_oop_4', text: 'ما هو مبدأ "Duck Typing" في بايثون فيما يتعلق بتعدد الأوجه؟', options: ['أن الكائن يجب أن يكون من صنف "Duck" ليعمل', 'أن نوع الكائن هو الأهم، وليس سلوكه', 'إذا كان الكائن يتصرف (لديه الطرق المطلوبة) مثل نوع معين، فيمكن معاملته على هذا الأساس، بغض النظر عن نوعه الفعلي', 'أنه يجب استخدام مكتبة خاصة لتحقيق تعدد الأوجه'], correctAnswerIndex: 2, explanation: '"If it walks like a duck and quacks like a duck, then it must be a duck." يعتمد على سلوك الكائن (الطرق المتاحة) بدلاً من نوعه الصريح.' },
      { id: 'adv_oop_5', text: 'في المثال `class B(A): pass`، أي صنف هو الصنف الأب (Superclass)؟', options: ['B', 'A', 'pass', 'لا يوجد صنف أب'], correctAnswerIndex: 1, explanation: 'الصنف الذي يوضع بين القوسين في تعريف الصنف الابن هو الصنف الأب (A في هذه الحالة).' }
    ]
  },
  {
    id: 'l3-lesson-4',
    slug: 'context-managers',
    title: 'مديرو السياق (Context Managers) واستخدام جملة `with`',
    description: 'تعلم كيف تستخدم مديري السياق وجملة `with` لضمان إدارة الموارد (مثل الملفات أو الاتصالات) بشكل صحيح وآمن.',
    content: [
      { type: 'heading', text: 'إدارة الموارد بأمان: مديرو السياق وجملة `with`' },
      { type: 'paragraph', text: 'كتير أوي في البرمجة بنحتاج نتعامل مع "موارد" (Resources) لازم نعملها إعداد (Setup) في الأول، وبعد ما نخلص شغلنا بيها لازم نعملها "تنظيف" (Cleanup) أو إغلاق (Teardown) بشكل كويس. أشهر مثال على كده هو التعامل مع الملفات: لازم نفتح الملف الأول، وبعدين نقرا منه أو نكتب فيه، وفي الآخر لازم نقفله عشان نتأكد إن كل حاجة اتكتبت صح وإننا محرناش المورد ده.' },
      { type: 'paragraph', text: 'المشكلة إننا ممكن ننسى نقفل الملف، أو ممكن يحصل خطأ (Exception) في نص الشغل فالبرنامج يقف قبل ما يوصل لسطر إغلاق الملف. هنا بيجي دور "مديرو السياق" (Context Managers) وجملة `with` عشان يضمنوا إن عملية التنظيف دي بتحصل دايماً، حتى لو حصل أخطاء.'},
      { type: 'subheading', text: 'جملة `with` مع الملفات (المثال الأشهر):' },
      { type: 'paragraph', text: 'إحنا بالفعل ممكن نكون شفنا جملة `with` لما كنا بنتعامل مع الملفات:'},
      { type: 'code', language: 'python', text:
`# الطريقة التقليدية (ممكن ننسى f.close() أو يحصل خطأ قبله)\n# f = open("myfile.txt", "w")\n# try:\n#     f.write("Hello, Bod Code!")\n# finally:\n#     f.close() # لازم نتأكد إنها بتتقفل حتى لو حصل خطأ\n\n# باستخدام جملة with (أفضل وأنضف)\nwith open("myfile.txt", "w", encoding="utf-8") as f: # f هنا هو كائن الملف\n    f.write("مرحباً يا Bod Code!\\n")\n    f.write("جملة with بتضمن إن الملف هيتقفل لوحده.")\n# أول ما نخرج من البلوك بتاع with، الملف f بيتقفل تلقائياً، حتى لو حصل خطأ جوه البلوك.`
      },
      { type: 'paragraph', text: 'كائن الملف اللي بيرجع من `open()` هو نفسه مدير سياق جاهز.'},
      { type: 'subheading', text: 'كيف يعمل مدير السياق؟ بروتوكول مدير السياق' },
      { type: 'paragraph', text: 'عشان أي كائن يقدر يشتغل كمدير سياق ويستخدم مع جملة `with`، لازم يحقق "بروتوكول مدير السياق". ده معناه إنه لازم يكون عنده دالتين خاصتين:'},
      { type: 'list', text:'', items:[
        '`__enter__(self)`: الدالة دي بتشتغل أول ما ندخل البلوك بتاع `with`. القيمة اللي بترجعها الدالة دي هي اللي بتتخزن في المتغير اللي بعد كلمة `as` (زي `f` في المثال اللي فات). لو مش محتاج ترجع حاجة معينة، ممكن ترجع `self` أو `None`.',
        '`__exit__(self, exc_type, exc_val, exc_tb)`: الدالة دي بتشتغل أول ما نخرج من البلوك بتاع `with`، سواء خرجنا بشكل طبيعي أو بسبب حدوث خطأ. الـ arguments التلاتة الأخيرة (`exc_type`, `exc_val`, `exc_tb`) بيكون فيهم معلومات عن الخطأ لو حصل (بيكونوا `None` لو مفيش خطأ). لو الدالة دي رجعت `True`، ده معناه إنها عالجت الخطأ والخطأ مش هيتنشر أكتر من كده. لو رجعت `False` (أو مرجعتش حاجة، فالافتراضي `None` اللي بيعتبر `False` في السياق ده)، الخطأ هيتنشر عادي.'
      ]},
      { type: 'subheading', text: 'إنشاء مدير سياق مخصص باستخدام صنف (Class):' },
      { type: 'code', language: 'python', text:
`class Timer: # مدير سياق بسيط بيحسب الوقت اللي خده بلوك الكود\n    def __init__(self, name="Timer"):\n        self.name = name\n        print(f"المؤقت '{self.name}' بدأ.")\n\n    def __enter__(self):\n        import time\n        self.start_time = time.time()\n        return self # ممكن نرجع أي حاجة، هنا بنرجع المؤقت نفسه لو حبينا نستخدمه جوه البلوك\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        import time\n        self.end_time = time.time()\n        elapsed_time = self.end_time - self.start_time\n        print(f"المؤقت '{self.name}' انتهى. الوقت المستغرق: {elapsed_time:.4f} ثانية.")\n        # لو رجعنا True هنا، أي خطأ هيحصل جوه الـ with هيتم تجاهله (مش دايماً فكرة كويسة)\n        return False # بنرجع False عشان الأخطاء تتنشر عادي لو حصلت\n\nwith Timer("عملية مهمة") as t:\n    # شوية عمليات بتاخد وقت\n    total = 0\n    for i in range(1000000):\n        total += i\n    print(f"الإجمالي: {total}")\n\nprint("بعد بلوك الـ with.")`
      },
      { type: 'subheading', text: 'إنشاء مدير سياق باستخدام `contextlib.contextmanager`:' },
      { type: 'paragraph', text: 'موديول `contextlib` بيقدم طريقة أسهل لعمل مديري سياق بسيطة باستخدام دالة مُولد (generator function) ومُزخرف (decorator) اسمه `@contextmanager`.'},
      { type: 'paragraph', text: 'الدالة المُولدة دي لازم يكون فيها `yield` مرة واحدة بس. الكود اللي قبل الـ `yield` بيشتغل كأنه في `__enter__`. القيمة اللي بتعملها `yield` (لو فيه) هي اللي بتتخزن في المتغير بعد `as`. الكود اللي بعد الـ `yield` بيشتغل كأنه في `__exit__` (وبتنفذ جوه بلوك `finally` عشان يضمن إنه يشتغل حتى لو حصل خطأ).'},
      { type: 'code', language: 'python', text:
`from contextlib import contextmanager\nimport time\n\n@contextmanager\ndef simple_timer(name="SimpleTimer"):\n    print(f"المؤقت البسيط '{name}' بدأ.")\n    start_time = time.time()\n    try:\n        yield # هنا الـ yield بترجع None ضمنياً، ممكن نعمل yield لقيمة لو عايزين\n    finally:\n        end_time = time.time()\n        elapsed_time = end_time - start_time\n        print(f"المؤقت البسيط '{name}' انتهى. الوقت: {elapsed_time:.4f} ثانية.")\n\nwith simple_timer("حسابات سريعة"):\n    result = sum(i for i in range(500000))\n    print(f"نتيجة الحسابات: {result}")`
      },
      { type: 'paragraph', text: 'مديرو السياق وجملة `with` بيخلوا الكود بتاعك أكثر أمانًا وأسهل في القراءة، لأنهم بيضمنوا إن الموارد بيتم التعامل معاها بشكل صحيح من غير ما تحتاج تكتب بلوكات `try...finally` معقدة كل مرة.'}
    ],
    quiz: [
      { id: 'adv_cm_1', text: 'ما هي الفائدة الرئيسية لاستخدام جملة `with` مع مدير سياق (Context Manager)؟', options: ['لجعل الكود يعمل بشكل أسرع', 'لضمان تنفيذ عمليات الإعداد (setup) والتنظيف (cleanup) للموارد بشكل صحيح وآمن، حتى في حالة حدوث أخطاء', 'لإضافة تعليقات تلقائية للكود', 'لإنشاء متغيرات جديدة فقط داخل البلوك'], correctAnswerIndex: 1, explanation: 'جملة `with` تضمن أن موارد مثل الملفات يتم إغلاقها بشكل صحيح.' },
      { id: 'adv_cm_2', text: 'ما هما الدالتان الخاصتان اللتان يجب أن يوفرهما الصنف ليعمل كمدير سياق؟', options: ['`__start__()` و `__end__()`', '`__open__()` و `__close__()`', '`__init__()` و `__del__()`', '`__enter__()` و `__exit__()`'], correctAnswerIndex: 3, explanation: 'بروتوكول مدير السياق يتطلب تعريف دالتي `__enter__` و `__exit__`.' },
      { id: 'adv_cm_3', text: 'متى يتم استدعاء دالة `__enter__()` الخاصة بمدير السياق؟', options: ['عند الخروج من بلوك `with`', 'عند الدخول إلى بلوك `with`', 'فقط إذا حدث خطأ داخل بلوك `with`', 'لا يتم استدعاؤها تلقائيًا'], correctAnswerIndex: 1, explanation: '`__enter__` يتم استدعاؤها عند بدء تنفيذ بلوك `with`.' },
      { id: 'adv_cm_4', text: 'ماذا يحدث إذا رجعت دالة `__exit__()` قيمة `True` بعد حدوث خطأ داخل بلوك `with`؟', options: ['يتم نشر الخطأ (reraised) بشكل طبيعي', 'يتم قمع الخطأ (suppressed) ولا يتم نشره خارج بلوك `with`', 'يتوقف البرنامج بالكامل فورًا', 'يتم استدعاء `__enter__()` مرة أخرى'], correctAnswerIndex: 1, explanation: 'إذا عادت `__exit__` بـ `True`، فهذا يشير إلى أن الخطأ قد تم التعامل معه ولا ينبغي نشره.' },
      { id: 'adv_cm_5', text: 'ما هو المُزخرف (decorator) من موديول `contextlib` الذي يسمح بإنشاء مدير سياق باستخدام دالة مُولدة (generator function)؟', options: ['`@contextmanager`', '`@managewith`', '`@contextgenerator`', '`@withable`'], correctAnswerIndex: 0, explanation: '`@contextlib.contextmanager` هو المُزخرف المستخدم لهذا الغرض.' }
    ]
  },
  // 8 New Lessons Start Here
  {
    id: 'l3-lesson-5',
    slug: 'regular-expressions',
    title: 'التعبيرات النمطية (Regular Expressions) للبحث المتقدم في النصوص',
    description: 'تعلم كيف تستخدم التعبيرات النمطية للبحث عن أنماط معقدة في النصوص والتحقق من صحتها ومعالجتها باستخدام موديول `re`.',
    content: [
      { type: 'heading', text: 'صياد الأنماط الخفي: التعبيرات النمطية (Regex)' },
      { type: 'paragraph', text: 'التعبيرات النمطية (Regular Expressions أو Regex اختصاراً) دي لغة مصغرة جوه لغة البرمجة، بنستخدمها عشان نوصف "أنماط" (Patterns) معينة في النصوص. تخيل إنك عايز تدور على كل إيميلات في نص كبير، أو كل أرقام تليفونات، أو تتأكد إن كلمة سر المستخدم مطابقة لشروط معينة (فيها حروف كبيرة وصغيرة وأرقام ورموز). الـ Regex بيخليك تعمل كل ده وأكتر!' },
      { type: 'paragraph', text: 'في بايثون، بنستخدم موديول `re` المدمج عشان نشتغل بالتعبيرات النمطية.' },
      { type: 'code', language: 'python', text: 'import re' },
      { type: 'subheading', text: 'أشهر الرموز والأنماط في Regex:' },
      { type: 'list', text: 'بعض الرموز الأساسية (Metacharacters):', items: [
        '`.` (نقطة): بتطابق أي حرف واحد (ماعدا سطر جديد `\\n` إلا لو استخدمت خيار معين).',
        '`^` (علامة القبعة): بتطابق بداية السلسلة النصية. مثال: `^Hello` تطابق "Hello World" لكن لا تطابق "World Hello".',
        '`$` (علامة الدولار): بتطابق نهاية السلسلة النصية. مثال: `World$` تطابق "Hello World" لكن لا تطابق "World Hello".',
        '`*` (النجمة): بتطابق الحرف أو المجموعة اللي قبلها صفر مرة أو أكتر. مثال: `ab*c` تطابق "ac", "abc", "abbc".',
        '`+` (علامة الزائد): بتطابق الحرف أو المجموعة اللي قبلها مرة واحدة أو أكتر. مثال: `ab+c` تطابق "abc", "abbc" لكن لا تطابق "ac".',
        '`?` (علامة الاستفهام): بتطابق الحرف أو المجموعة اللي قبلها صفر مرة أو مرة واحدة. مثال: `colou?r` تطابق "color" و "colour".',
        '`{m}`: بتطابق الحرف أو المجموعة اللي قبلها `m` مرة بالظبط.',
        '`{m,n}`: بتطابق الحرف أو المجموعة اللي قبلها من `m` إلى `n` مرة.',
        '`[]` (الأقواس المربعة): بتعرف "مجموعة حروف" (Character Set). بتطابق أي حرف واحد من اللي جواها. مثال: `[abc]` تطابق "a" أو "b" أو "c". ممكن تستخدم مدى زي `[a-z]` (كل الحروف الصغيرة) أو `[0-9]` (كل الأرقام).',
        '`[^...]`: بتطابق أي حرف مش موجود جوه الأقواس المربعة (نفي المجموعة).',
        '`|` (الشرطة الرأسية - OR): بتطابق التعبير اللي قبلها أو التعبير اللي بعدها. مثال: `cat|dog` تطابق "cat" أو "dog".',
        '`()` (الأقواس الدائرية): بتستخدم لتجميع أجزاء من النمط (Grouping) أو لالتقاط (Capturing) الجزء اللي طابقه النمط ده.',
        '`\\` (الشرطة المائلة للخلف): بتستخدم لـ "إلغاء" المعنى الخاص للحرف اللي بعدها (Escape character). مثال: لو عايز تطابق نقطة حرفياً، تكتب `\\.`. كمان بتستخدم لتعريف تسلسلات خاصة.'
      ]},
      { type: 'list', text: 'بعض التسلسلات الخاصة (Special Sequences):', items: [
        '`\\d`: بتطابق أي رقم عشري (زي `[0-9]`).',
        '`\\D`: بتطابق أي حرف مش رقم عشري (زي `[^0-9]`).',
        '`\\s`: بتطابق أي مسافة بيضاء (space, tab, newline, etc.).',
        '`\\S`: بتطابق أي حرف مش مسافة بيضاء.',
        '`\\w`: بتطابق أي حرف "كلمة" (حروف أبجدية إنجليزية، أرقام، وعلامة `_`).',
        '`\\W`: بتطابق أي حرف مش "كلمة".',
        '`\\b`: بتطابق حدود الكلمة ( بداية أو نهاية كلمة). مثال: `\\bcat\\b` تطابق "cat" ككلمة منفصلة.'
      ]},
      { type: 'subheading', text: 'أشهر دوال موديول `re`:' },
      { type: 'list', text: '', items: [
        '`re.search(pattern, string)`: بيبحث عن أول ظهور للنمط `pattern` في السلسلة `string`. لو لقاه، بيرجع كائن "match object" فيه معلومات عن التطابق. لو ملقاهوش، بيرجع `None`.',
        '`re.match(pattern, string)`: زي `search` بس بيحاول يطابق النمط من "بداية" السلسلة فقط. لو النمط مش بيبدأ من أول السلسلة، بيرجع `None`.',
        '`re.findall(pattern, string)`: بيرجع قايمة (list) بكل التطابقات غير المتداخلة للنمط في السلسلة. كل عنصر في القايمة بيكون النص اللي طابقه النمط.',
        '`re.finditer(pattern, string)`: زي `findall` بس بيرجع مُكرِّر (iterator) من كائنات الـ "match objects" بدل قايمة نصوص.',
        '`re.sub(pattern, repl, string)`: بيستبدل كل ظهور للنمط `pattern` في السلسلة `string` بالنص `repl`. بيرجع السلسلة الجديدة بعد التعديل.',
        '`re.compile(pattern)`: لو هتستخدم نفس النمط كتير، ممكن "تجمعه" (compile) الأول باستخدام الدالة دي. ده بيرجع كائن نمط (pattern object) تقدر تستخدم معاه دوال زي `search`, `match`, `findall` مباشرة، وده ممكن يكون أسرع شوية.'
      ]},
      { type: 'code', language: 'python', text:
`import re

text = "Hello from Bod Code! My email is test@example.com and phone is 123-456-7890."

# البحث عن كلمة "Bod Code"
match_obj = re.search(r"Bod Code", text) # r"" بتعمل raw string عشان الـ \\ ميتفهمش غلط
if match_obj:
    print(f"لقينا 'Bod Code' من الفهرس {match_obj.start()} إلى {match_obj.end()}")
    print(f"النص المتطابق: {match_obj.group(0)}") # .group(0) أو .group() بترجع النص اللي طابقه النمط كله
else:
    print("'Bod Code' مش موجودة.")

# استخراج كل الإيميلات (نمط بسيط للإيميل)
email_pattern = r"\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b"
emails = re.findall(email_pattern, text)
print(f"الإيميلات الموجودة: {emails}") # ['test@example.com']

# استبدال أرقام التليفونات بكلمة [PHONE_REDACTED]
phone_pattern = r"\\d{3}-\\d{3}-\\d{4}"
censored_text = re.sub(phone_pattern, "[PHONE_REDACTED]", text)
print(f"النص بعد التعديل: {censored_text}")`
      },
      { type: 'subheading', text: 'كائن التطابق (Match Object):' },
      { type: 'paragraph', text: 'لما `search` أو `match` بيلاقوا تطابق، بيرجعوا كائن فيه معلومات مفيدة:'},
      { type: 'list', text: '', items: [
        '`.group(index_or_name)`: بيرجع النص اللي طابقه المجموعة (group) اللي حددتها. `group(0)` أو `group()` بيرجع النص كله اللي طابقه النمط. لو استخدمت أقواس `()` في النمط بتاعك عشان تعمل مجموعات التقاط (capturing groups)، تقدر توصلهم بـ `group(1)`, `group(2)` وهكذا.',
        '`.start()`: بيرجع فهرس بداية التطابق.',
        '`.end()`: بيرجع فهرس نهاية التطابق (اللي بعد آخر حرف طابقه).',
        '`.span()`: بيرجع tuple فيه فهرس البداية والنهاية.'
      ]},
      { type: 'paragraph', text: 'التعبيرات النمطية أداة قوية جداً وموجودة في لغات برمجة كتير. ممكن تبان معقدة في الأول، بس لما تتقنها بتوفر عليك مجهود كبير جداً في معالجة النصوص. فيه مواقع كتير أونلاين ممكن تجرب عليها الـ Regex بتاعك وتشوف هو بيطابق إيه (زي regex101.com).'}
    ],
    quiz: [
      { id: 'adv_re_1', text: 'ما هو الموديول الذي يجب استيراده في بايثون للعمل مع التعبيرات النمطية؟', options: ['`regex`', '`string`', '`re`', '`pattern`'], correctAnswerIndex: 2, explanation: 'موديول `re` هو الموديول القياسي في بايثون للتعبيرات النمطية.' },
      { id: 'adv_re_2', text: 'أي من الرموز التالية في Regex يطابق "أي حرف واحد" (باستثناء سطر جديد افتراضيًا)؟', options: ['`*`', '`?`', '`.` (نقطة)', '`+`'], correctAnswerIndex: 2, explanation: 'النقطة `.` تطابق أي حرف واحد.' },
      { id: 'adv_re_3', text: 'ماذا تفعل دالة `re.findall(pattern, string)`؟', options: ['ترجع أول تطابق للنمط فقط ككائن match', 'ترجع قائمة (list) بكل النصوص التي تطابق النمط في السلسلة', 'تستبدل كل تطابق للنمط بنص جديد', 'تجمع النمط لاستخدامه لاحقًا'], correctAnswerIndex: 1, explanation: '`re.findall()` تعيد قائمة بكل التطابقات النصية.' },
      { id: 'adv_re_4', text: 'في Regex، ماذا يعني التسلسل الخاص `\\d`؟', options: ['يطابق أي حرف غير رقمي', 'يطابق أي مسافة بيضاء', 'يطابق أي رقم عشري (0-9)', 'يطابق أي حرف كلمة (أبجدي رقمي)'], correctAnswerIndex: 2, explanation: '`\\d` هو اختصار لمجموعة الأرقام `[0-9]`.' },
      { id: 'adv_re_5', text: 'إذا كان `match = re.search(r"(Hello) (World)", "Hello World")`، فماذا سيعيد `match.group(2)`؟', options: ['`"Hello World"`', '`"Hello"`', '`"World"`', 'خطأ'], correctAnswerIndex: 2, explanation: '`group(1)` سيعيد ما طابقته المجموعة الأولى `(Hello)`، و `group(2)` سيعيد ما طابقته المجموعة الثانية `(World)`.' }
    ]
  },
  {
    id: 'l3-lesson-6',
    slug: 'working-with-apis',
    title: 'التعامل مع واجهات برمجة التطبيقات (APIs) لجلب البيانات من الويب',
    description: 'اكتشف كيفية استهلاك APIs خارجية لجلب بيانات من خدمات الويب المختلفة ودمجها في تطبيقاتك باستخدام مكتبة `requests`.',
    content: [
      { type: 'heading', text: 'نافذتك على عالم البيانات: التعامل مع APIs' },
      { type: 'paragraph', text: 'واجهة برمجة التطبيقات (Application Programming Interface - API) دي طريقة بتسمح لبرنامجك إنه يتكلم مع برنامج تاني ويطلب منه بيانات أو يطلب منه يعمل حاجة معينة. تخيلها زي الجرسون في مطعم: إنت (برنامجك) بتطلب من الجرسون (الـ API) طلب معين (بيانات معينة)، وهو بيروح للمطبخ (البرنامج التاني أو السيرفر) ويجيبلك الطلب.' },
      { type: 'paragraph', text: 'كتير من المواقع والخدمات على الإنترنت (زي خدمات الطقس، الأخبار، الخرايط، شبكات التواصل الاجتماعي، إلخ) بتقدم APIs عشان المطورين يقدروا يستخدموا بياناتها أو وظائفها في تطبيقاتهم الخاصة. معظم الـ APIs دي بتكون Web APIs، يعني بتشتغل عن طريق بروتوكول HTTP (نفس البروتوكول اللي بيستخدمه متصفحك عشان يجيب صفحات الويب).' },
      { type: 'subheading', text: 'طلبات HTTP الأساسية:' },
      { type: 'list', text: 'أشهر أنواع طلبات HTTP اللي بنستخدمها مع APIs:', items: [
        '`GET`: لطلب بيانات من السيرفر (زي لما بتفتح صفحة ويب).',
        '`POST`: لإرسال بيانات للسيرفر عشان يعمل حاجة جديدة (زي لما بتبعت فورم أو تنشر بوست).',
        '`PUT`: لتحديث بيانات موجودة بالفعل على السيرفر.',
        '`DELETE`: لحذف بيانات من السيرفر.'
      ]},
      { type: 'subheading', text: 'مكتبة `requests` في بايثون:' },
      { type: 'paragraph', text: 'عشان نبعت طلبات HTTP ونتعامل مع الـ APIs بسهولة في بايثون، بنستخدم مكتبة مشهورة جداً اسمها `requests`. المكتبة دي مش جزء من المكتبة القياسية لبايثون، فبتحتاج تثبتها الأول لو مش متثبتة عندك:'},
      { type: 'code', language: 'text', text: 'pip install requests' },
      { type: 'paragraph', text: 'بعد ما تثبتها، تقدر تستوردها في الكود بتاعك:' },
      { type: 'code', language: 'python', text: 'import requests' },
      { type: 'subheading', text: 'إرسال طلب `GET` بسيط:' },
      { type: 'paragraph', text: 'هنستخدم API مجاني ومفتوح اسمه JSONPlaceholder، بيقدم بيانات وهمية (fake data) عشان نجرب عليها. مثلاً، عشان نجيب قايمة بـ "المهام" (todos):'},
      { type: 'code', language: 'python', text:
`import requests
import json # عشان نعرض الـ JSON بشكل منظم

api_url = "https://jsonplaceholder.typicode.com/todos"

try:
    response = requests.get(api_url) # بنبعت طلب GET للـ URL ده

    # نتأكد إن الطلب نجح (status code 200 يعني OK)
    response.raise_for_status() # لو فيه خطأ HTTP (زي 404 أو 500)، السطر ده هيعمل استثناء

    # الـ API ده بيرجع بيانات بصيغة JSON
    # مكتبة requests عندها دالة .json() بتحول الـ JSON ده لقاموس أو قايمة بايثون علطول
    todos_data = response.json() 

    print(f"جبنا {len(todos_data)} مهمة.")
    
    # نطبع أول 3 مهام كمثال
    for i in range(min(3, len(todos_data))):
        todo = todos_data[i]
        print(f"المهمة رقم {todo['id']}: {todo['title']} (مكتملة: {todo['completed']})")

except requests.exceptions.HTTPError as http_err:
    print(f"حصل خطأ HTTP: {http_err}")
except requests.exceptions.RequestException as req_err:
    print(f"حصل خطأ في الطلب: {req_err}")
except Exception as err:
    print(f"حصل خطأ تاني: {err}")`
      },
      { type: 'subheading', text: 'كائن الاستجابة (Response Object):' },
      { type: 'paragraph', text: 'لما بتبعت طلب، مكتبة `requests` بترجعلك كائن استجابة (response object) فيه معلومات كتير عن الرد اللي جالك من السيرفر:'},
      { type: 'list', text: '', items: [
        '`.status_code`: رقم حالة HTTP (مثلاً 200 لـ OK، 404 لـ Not Found، 500 لـ Internal Server Error).',
        '`.text`: محتوى الرد كنص (string).',
        '`.json()`: لو الرد بصيغة JSON، الدالة دي بتحاول تحوله لكائن بايثون (list أو dict).',
        '`.headers`: قاموس فيه الـ HTTP headers بتاعة الرد.',
        '`.content`: محتوى الرد كـ bytes (مفيد للملفات الثنائية زي الصور).'
      ]},
      { type: 'subheading', text: 'إرسال بيانات مع الطلب (Query Parameters و Request Body):' },
      { type: 'list', text: '', items: [
        '**Query Parameters (لطلبات `GET`):** ساعات بنحتاج نبعت معلومات إضافية مع طلب `GET` عشان نفلتر أو نخصص البيانات اللي عايزينها. دي بتتحط في الـ URL بعد علامة `?` وبتكون على شكل `key=value`. مكتبة `requests` بتسمحلك تبعت قاموس بالـ parameters دي وهي بتعمل الـ URL صح.',
        '**Request Body (لطلبات `POST` أو `PUT`):** لما بنكون عايزين نبعت بيانات للسيرفر (زي بيانات فورم جديد)، بنحطها في "جسم الطلب" (request body). لو البيانات دي بصيغة JSON، ممكن نبعت قاموس بايثون باستخدام الـ argument `json` في دالة `requests.post()`.'
      ]},
      { type: 'code', language: 'python', text:
`import requests

# مثال على GET مع query parameters
# هنجيب المهمة رقم 1 بس
todo_id = 1
url_single_todo = f"https://jsonplaceholder.typicode.com/todos/{todo_id}" 
# أو ممكن نستخدم params:
# url_base = "https://jsonplaceholder.typicode.com/todos"
# params = {"id": 1}
# response_single = requests.get(url_base, params=params)

response_single = requests.get(url_single_todo)
if response_single.status_code == 200:
    single_todo_data = response_single.json()
    print(f"\\nبيانات المهمة رقم {todo_id}: {single_todo_data}")
else:
    print(f"\\nفشل في جلب المهمة رقم {todo_id}. كود الحالة: {response_single.status_code}")


# مثال على POST لإضافة "منشور" (post) جديد (الـ API ده وهمي فمش هيحفظه فعلياً)
posts_url = "https://jsonplaceholder.typicode.com/posts"
new_post_data = {
    "title": "منشور جديد من Bod Code",
    "body": "ده محتوى المنشور بتاعنا.",
    "userId": 101 # أي رقم مستخدم
}

try:
    post_response = requests.post(posts_url, json=new_post_data)
    post_response.raise_for_status() # نتأكد من النجاح (عادة بيكون 201 Created)
    
    created_post = post_response.json()
    print(f"\\nتم إنشاء منشور جديد (وهمياً):")
    print(created_post) # الـ API ده بيرجع المنشور اللي "اتعمل" مع id جديد
except requests.exceptions.RequestException as e:
    print(f"\\nفشل في إرسال المنشور: {e}")`
      },
      { type: 'subheading', text: 'مفاتيح الـ API (API Keys) والمصادقة (Authentication):' },
      { type: 'paragraph', text: 'كتير من الـ APIs (خصوصاً اللي بتقدم بيانات حساسة أو ليها حدود استخدام) بتحتاج "مفتاح API" (API Key) أو نوع تاني من "المصادقة" عشان تتأكد إنك مسموحلك تستخدم الخدمة. طريقة إرسال المفتاح ده بتختلف من API للتاني: ممكن يكون في الـ headers، أو كـ query parameter. لازم تقرا توثيق الـ API اللي بتستخدمه عشان تعرف الطريقة الصح.'},
      { type: 'paragraph', text: 'التعامل مع الـ APIs بيفتحلك إمكانيات لا نهائية عشان تطبيقاتك تتفاعل مع العالم الخارجي وتستخدم بيانات وخدمات متنوعة. مكتبة `requests` بتخلي العملية دي سهلة وممتعة!'}
    ],
    quiz: [
      { id: 'adv_api_1', text: 'ما هي مكتبة بايثون الشهيرة المستخدمة لإرسال طلبات HTTP والتعامل مع APIs؟', options: ['`http.client`', '`urllib`', '`requests`', '`socket`'], correctAnswerIndex: 2, explanation: 'مكتبة `requests` هي الأكثر شيوعًا وسهولة في الاستخدام لهذا الغرض.' },
      { id: 'adv_api_2', text: 'أي نوع من طلبات HTTP يستخدم عادةً لطلب (جلب) بيانات من سيرفر API؟', options: ['`POST`', '`GET`', '`PUT`', '`DELETE`'], correctAnswerIndex: 1, explanation: 'طلب `GET` يستخدم لجلب الموارد والبيانات.' },
      { id: 'adv_api_3', text: 'إذا نجح طلب HTTP، ما هو رقم حالة (status code) الاستجابة الأكثر شيوعًا الذي يشير إلى "OK"؟', options: ['404', '500', '200', '301'], correctAnswerIndex: 2, explanation: '`200 OK` هو كود الحالة القياسي للنجاح.' },
      { id: 'adv_api_4', text: 'في مكتبة `requests`، إذا كانت استجابة الـ API بصيغة JSON، أي دالة على كائن الاستجابة تستخدم لتحويلها مباشرة إلى قاموس أو قائمة بايثون؟', options: ['`.text()`', '`.content()`', '`.parse_json()`', '`.json()`'], correctAnswerIndex: 3, explanation: 'دالة `.json()` تقوم بتحليل الاستجابة كـ JSON وتحويلها إلى هياكل بيانات بايثون.' },
      { id: 'adv_api_5', text: 'عند إرسال بيانات لإنشاء مورد جديد على السيرفر (مثل إرسال فورم)، أي نوع من طلبات HTTP يستخدم عادةً، وأين توضع البيانات المرسلة؟', options: ['`GET`، وتوضع البيانات في الـ URL كـ query parameters.', '`POST`، وتوضع البيانات في جسم الطلب (request body).', '`DELETE`، ولا يتم إرسال بيانات.', '`GET`، وتوضع البيانات في الـ headers.'], correctAnswerIndex: 1, explanation: '`POST` يستخدم لإنشاء موارد جديدة، ويتم إرسال البيانات عادة في جسم الطلب (مثلاً كـ JSON).' }
    ]
  },
  {
    id: 'l3-lesson-7',
    slug: 'basic-database-interaction',
    title: 'أساسيات التعامل مع قواعد البيانات باستخدام `sqlite3`',
    description: 'تعلم كيفية تخزين واسترجاع البيانات بشكل دائم باستخدام وحدة `sqlite3` المدمجة، وهي قاعدة بيانات خفيفة ومناسبة للمشاريع الصغيرة والمتوسطة.',
    content: [
      { type: 'heading', text: 'خزنة أسرارك الدائمة: قواعد البيانات مع `sqlite3`' },
      { type: 'paragraph', text: 'لما تطبيقاتنا بتحتاج تحفظ بيانات بشكل دائم وتسترجعها بعدين، حتى لو البرنامج اتقفل واتفتح تاني، بنلجأ لـ "قواعد البيانات" (Databases). قاعدة البيانات دي نظام متخصص لتخزين وتنظيم والبحث في كميات كبيرة من البيانات بكفاءة.' },
      { type: 'paragraph', text: 'بايثون عندها موديول مدمج اسمه `sqlite3` بيخلينا نتعامل مع نوع خفيف جداً من قواعد البيانات اسمه SQLite. SQLite مش محتاجة سيرفر منفصل، قاعدة البيانات كلها بتكون عبارة عن ملف واحد بس على جهازك، وده بيخليها مناسبة جداً للمشاريع الصغيرة والمتوسطة أو لما تكون عايز قاعدة بيانات مدمجة مع تطبيقك.' },
      { type: 'subheading', text: 'مفاهيم أساسية في قواعد البيانات العلائقية (زي SQLite):' },
      { type: 'list', text: '', items: [
        '**قاعدة البيانات (Database):** هي الحاوية الكبيرة اللي فيها كل حاجة (زي الملف بتاع SQLite).',
        '**الجداول (Tables):** جوه قاعدة البيانات، البيانات بتتنظم في جداول. كل جدول بيكون ليه اسم معين (زي جدول "المستخدمين" أو "المنتجات") وبيكون فيه "أعمدة" (Columns) و "صفوف" (Rows).',
        '**الأعمدة (Columns/Fields):** كل عمود في الجدول بيمثل نوع معين من البيانات (زي "اسم المستخدم"، "الإيميل"، "العمر"). كل عمود بيكون ليه اسم ونوع بيانات (نص، رقم، تاريخ، إلخ).',
        '**الصفوف (Rows/Records):** كل صف في الجدول بيمثل سجل واحد أو معلومة واحدة كاملة (زي بيانات مستخدم واحد بكل تفاصيله).',
        '**المفتاح الأساسي (Primary Key):** عادةً بيكون فيه عمود في كل جدول قيمته فريدة لكل صف (مينفعش تتكرر). ده بنسميه المفتاح الأساسي، وبنستخدمه عشان نميز كل صف عن التاني (زي رقم البطاقة أو رقم تسلسلي).',
        '**لغة SQL (Structured Query Language):** دي اللغة القياسية اللي بنستخدمها عشان نتكلم مع قواعد البيانات العلائقية (نعمل جداول، نضيف بيانات، نبحث، نعدل، نمسح). SQLite بتفهم أوامر SQL.'
      ]},
      { type: 'subheading', text: 'خطوات التعامل مع `sqlite3` في بايثون:' },
      { type: 'list', text: 'عادةً بنمشي على الخطوات دي:', items: [
        '1. **الاتصال بقاعدة البيانات (Connect):** بنستخدم `sqlite3.connect("database_filename.db")` عشان نعمل اتصال. لو الملف مش موجود، SQLite هيعملهولك.',
        '2. **إنشاء مؤشر (Cursor):** المؤشر ده كائن بنستخدمه عشان ننفذ أوامر SQL ونلف على النتايج.',
        '3. **تنفيذ أوامر SQL:** بنستخدم دوال المؤشر زي `cursor.execute()` أو `cursor.executemany()` عشان ننفذ أوامر SQL (زي `CREATE TABLE`, `INSERT`, `SELECT`, `UPDATE`, `DELETE`).',
        '4. **جلب النتائج (Fetch Results) (لو بنعمل `SELECT`):** بنستخدم دوال المؤشر زي `cursor.fetchone()`, `cursor.fetchall()`, أو نلف على المؤشر نفسه.',
        '5. **تثبيت التغييرات (Commit):** لو عملت أي تغييرات على البيانات (زي `INSERT`, `UPDATE`, `DELETE`)، لازم تعمل `connection.commit()` عشان التغييرات دي تتخزن فعلياً في ملف قاعدة البيانات.',
        '6. **إغلاق الاتصال (Close):** مهم جداً تقفل الاتصال بـ `connection.close()` بعد ما تخلص عشان تحرر الموارد.'
      ]},
      { type: 'code', language: 'python', text:
`import sqlite3

# 1. الاتصال (أو إنشاء) قاعدة بيانات
conn = sqlite3.connect("my_bod_code_app.db") # هيعمل ملف اسمه كده لو مش موجود

# 2. إنشاء مؤشر
cursor = conn.cursor()

# 3. تنفيذ أمر SQL لإنشاء جدول (لو مش موجود)
# بنستخدم """ """ عشان نكتب الأمر على كذا سطر لو طويل
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- مفتاح أساسي بيزيد لوحده
    name TEXT NOT NULL,                   -- نص مينفعش يكون فاضي
    email TEXT UNIQUE,                    -- نص لازم يكون فريد
    age INTEGER
)
""")
print("جدول users جاهز.")

# --- إضافة بيانات (INSERT) ---
try:
    # الطريقة الأولى: إدخال مباشر (غير آمن لو البيانات جاية من المستخدم)
    # cursor.execute("INSERT INTO users (name, email, age) VALUES ('أحمد علي', 'ahmed@example.com', 30)")
    
    # الطريقة الثانية (آمنة): استخدام placeholders (?)
    user_data1 = ("فاطمة حسن", "fatima@example.com", 25)
    cursor.execute("INSERT INTO users (name, email, age) VALUES (?, ?, ?)", user_data1)

    # لإضافة كذا مستخدم مرة واحدة (executemany)
    more_users = [
        ("خالد وليد", "khaled@example.com", 35),
        ("نور عادل", "nour@example.com", 28)
    ]
    cursor.executemany("INSERT INTO users (name, email, age) VALUES (?, ?, ?)", more_users)
    
    # 5. تثبيت التغييرات
    conn.commit() 
    print("تم إضافة المستخدمين بنجاح.")

except sqlite3.IntegrityError as e:
    print(f"خطأ في الإضافة (يمكن الإيميل مكرر): {e}")
    conn.rollback() # تراجع عن التغييرات لو حصل خطأ في الـ transaction

# --- استرجاع بيانات (SELECT) ---
print("\\nالمستخدمون المسجلون:")
cursor.execute("SELECT id, name, email, age FROM users WHERE age > ? ORDER BY name", (20,)) # هنجيب اللي سنهم أكبر من 20

# 4. جلب النتائج
# result_one = cursor.fetchone() # بيجيب صف واحد بس (أو None لو مفيش)
# print(f"أول مستخدم: {result_one}")

all_users = cursor.fetchall() # بيجيب كل الصفوف كقايمة من tuples
for user_row in all_users:
    print(f"ID: {user_row[0]}, الاسم: {user_row[1]}, الإيميل: {user_row[2]}, العمر: {user_row[3]}")

# --- تحديث بيانات (UPDATE) ---
try:
    cursor.execute("UPDATE users SET age = ? WHERE email = ?", (29, "nour@example.com"))
    conn.commit()
    print("\\nتم تحديث عمر نور.")
except Exception as e:
    print(f"خطأ في التحديث: {e}")
    conn.rollback()

# --- حذف بيانات (DELETE) ---
# try:
#     cursor.execute("DELETE FROM users WHERE email = ?", ("khaled@example.com",))
#     conn.commit()
#     print("\\nتم حذف خالد.")
# except Exception as e:
#     print(f"خطأ في الحذف: {e}")
#     conn.rollback()

# 6. إغلاق الاتصال (يفضل دائماً في بلوك finally أو باستخدام with)
if conn:
    conn.close()
    print("\\nتم إغلاق الاتصال بقاعدة البيانات.")`
      },
      { type: 'paragraph', text: '**ملاحظة على الأمان:** لما تيجي تدخل بيانات جاية من المستخدم في أمر SQL، أوعى تعملها بدمج النصوص (string formatting) عشان ده بيعرضك لخطر اسمه "SQL Injection". دايماً استخدم الـ placeholders (`?`) زي ما شفنا في المثال، موديول `sqlite3` هيتعامل مع تطهير المدخلات بشكل آمن.'},
      { type: 'paragraph', text: '**استخدام `with` مع الاتصال:** كائن الاتصال بتاع `sqlite3` ممكن يشتغل كمدير سياق. لو استخدمته مع `with`، هيعمل `commit` تلقائياً لو كل حاجة تمام، أو `rollback` لو حصل خطأ، ومش هتحتاج تقفل الاتصال بنفسك (بس ده بيكون على مستوى الـ transaction مش الاتصال الكلي).'},
      { type: 'code', language: 'python', text:
`# استخدام with للـ transaction
# try:
#     with sqlite3.connect("another_app.db") as conn_with:
#         cursor_with = conn_with.cursor()
#         cursor_with.execute("CREATE TABLE IF NOT EXISTS items (name TEXT, price REAL)")
#         cursor_with.execute("INSERT INTO items VALUES ('لابتوب', 15000.0)")
#         # لو حصل خطأ هنا، هيتعمل rollback تلقائي
#         # لو مفيش أخطاء، هيتعمل commit تلقائي عند الخروج من الـ with
#     print("تم التعامل مع another_app.db باستخدام with")
# except Exception as e:
#     print(f"خطأ مع with: {e}")
# finally:
#     if 'conn_with' in locals() and conn_with: # الاتصال نفسه ممكن يفضل مفتوح لو حصل خطأ بره الـ transaction
#         conn_with.close()
# الطريقة الأشمل هي إغلاق الاتصال الرئيسي في finally دائماً.`
      },
      { type: 'paragraph', text: 'التعامل مع قواعد البيانات مهارة أساسية لبناء تطبيقات بتحفظ بياناتها. SQLite بداية ممتازة، ولما مشاريعك تكبر ممكن تنتقل لقواعد بيانات أقوى زي PostgreSQL أو MySQL بنفس المفاهيم الأساسية للغة SQL.'}
    ],
    quiz: [
      { id: 'adv_db_1', text: 'ما هو الموديول المدمج في بايثون الذي يسمح بالتعامل مع قواعد بيانات SQLite؟', options: ['`mysql.connector`', '`psycopg2`', '`sqlite3`', '`pyodbc`'], correctAnswerIndex: 2, explanation: 'موديول `sqlite3` هو جزء من المكتبة القياسية لبايثون.' },
      { id: 'adv_db_2', text: 'ما هي لغة الاستعلام القياسية المستخدمة للتفاعل مع قواعد البيانات العلائقية مثل SQLite؟', options: ['Python', 'Java', 'HTML', 'SQL'], correctAnswerIndex: 3, explanation: 'SQL (Structured Query Language) هي اللغة المستخدمة لإدارة البيانات في قواعد البيانات العلائقية.' },
      { id: 'adv_db_3', text: 'أي دالة على كائن الاتصال (connection object) يجب استدعاؤها لحفظ التغييرات (مثل INSERT, UPDATE, DELETE) بشكل دائم في قاعدة البيانات؟', options: ['`connection.save()`', '`connection.write()`', '`connection.commit()`', '`connection.persist()`'], correctAnswerIndex: 2, explanation: '`connection.commit()` تقوم بتثبيت التغييرات في قاعدة البيانات.' },
      { id: 'adv_db_4', text: 'ما هو الغرض من استخدام علامات الاستفهام (`?`) كـ placeholders في أوامر SQL عند تنفيذها باستخدام `cursor.execute()`؟', options: ['لتسريع الاستعلام', 'للسماح باستخدام أي نوع بيانات', 'لمنع هجمات SQL Injection وجعل الاستعلامات أكثر أمانًا عند استخدام مدخلات المستخدم', 'لإضافة تعليقات داخل أمر SQL'], correctAnswerIndex: 2, explanation: 'Placeholders تساعد في منع SQL Injection عن طريق تطهير المدخلات.' },
      { id: 'adv_db_5', text: 'أي دالة على كائن المؤشر (cursor object) تستخدم لجلب "كل" الصفوف الناتجة عن استعلام `SELECT`؟', options: ['`cursor.getone()`', '`cursor.fetchrow()`', '`cursor.fetchall()`', '`cursor.getall()`'], correctAnswerIndex: 2, explanation: '`cursor.fetchall()` تعيد قائمة بكل الصفوف المتبقية من نتيجة الاستعلام.' }
    ]
  },
  {
    id: 'l3-lesson-8',
    slug: 'introduction-to-testing',
    title: 'مقدمة في اختبار البرمجيات (Testing) لضمان جودة تطبيقاتك',
    description: 'فهم أهمية الاختبارات، وكيفية كتابة اختبارات بسيطة باستخدام وحدة `unittest` للتأكد من أن الكود يعمل كما هو متوقع.',
    content: [
      { type: 'heading', text: 'اطمن على شغلك: مقدمة في اختبار البرمجيات' },
      { type: 'paragraph', text: 'لما بتبني تطبيق، خصوصاً لو كبير أو معقد، إزاي تتأكد إن كل حتة فيه شغالة صح؟ وإزاي تتأكد إنك لما تعدل حاجة في مكان، مبوظتش حاجة تانية في مكان تاني من غير ما تاخد بالك؟ الإجابة هي: "الاختبارات" (Testing)!' },
      { type: 'paragraph', text: 'اختبار البرمجيات ده عملية بنعملها عشان نلاقي الأخطاء (Bugs) في البرنامج بتاعنا ونتأكد إنه بيعمل المطلوب منه بالجودة المتوقعة. كتابة الاختبارات عادة كويسة جداً بتخليك واثق أكتر في الكود بتاعك وبتسهل عملية الصيانة والتطوير على المدى الطويل.' },
      { type: 'subheading', text: 'أنواع الاختبارات (بشكل مبسط):' },
      { type: 'list', text: '', items: [
        '**الاختبارات الوحدوية (Unit Tests):** دي اختبارات صغيرة بتركز على أصغر جزء من الكود ممكن نختبره لوحده (بنسميه "وحدة" - Unit)، زي دالة واحدة أو Method واحد في Class. هدفها نتأكد إن الوحدة دي شغالة صح بمعزل عن باقي أجزاء البرنامج.',
        '**الاختبارات التكاملية (Integration Tests):** دي بتختبر إزاي أكتر من وحدة أو جزء من البرنامج بيشتغلوا مع بعض. هدفها نتأكد إن الأجزاء دي بتتكامل وبتتواصل مع بعض بشكل صحيح.',
        '**الاختبارات الوظيفية/نهاية-إلى-نهاية (Functional/End-to-End Tests):** دي بتختبر البرنامج كله من وجهة نظر المستخدم، بتشوف هل البرنامج بيأدي الوظائف المطلوبة منه بشكل كامل ولا لأ.'
      ]},
      { type: 'paragraph', text: 'في الدرس ده، هنركز على الاختبارات الوحدوية (Unit Tests) لأنها الأساس وعادةً أول نوع من الاختبارات المبرمجين بيكتبوه.'},
      { type: 'subheading', text: 'موديول `unittest` في بايثون:' },
      { type: 'paragraph', text: 'بايثون بييجي معاه موديول مدمج للاختبارات الوحدوية اسمه `unittest` (مستوحى من إطار عمل xUnit المشهور). بيوفرلك الأدوات اللي محتاجها عشان تكتب وتنظم وتشغل الاختبارات بتاعتك.'},
      { type: 'subheading', text: 'كتابة اختبار وحدوي بسيط:' },
      { type: 'paragraph', text: '1. **ملف للاختبار:** عادةً بنعمل ملف منفصل للاختبارات، اسمه بيبدأ بـ `test_` (مثلاً لو عندك ملف اسمه `my_module.py`، ملف الاختبار بتاعه ممكن يكون `test_my_module.py`).'},
      { type: 'paragraph', text: '2. **استيراد `unittest` والدالة/الكلاس المراد اختباره:**'},
      { type: 'paragraph', text: '3. **إنشاء صنف (Class) للاختبارات:** الصنف ده لازم يرث من `unittest.TestCase`.'},
      { type: 'paragraph', text: '4. **كتابة دوال الاختبار (Test Methods):** جوه صنف الاختبار، كل دالة بتمثل حالة اختبار (test case) معينة. اسم دالة الاختبار لازم يبدأ بـ `test_`. جوه الدالة دي، بنستخدم دوال `assert` خاصة بيقدمهالنا `unittest.TestCase` عشان نتأكد من صحة النتائج.'},
      { type: 'list', text: 'أشهر دوال `assert`:', items:[
        '`assertEqual(a, b)`: بيتأكد إن `a` بتساوي `b`.',
        '`assertNotEqual(a, b)`: بيتأكد إن `a` مش بتساوي `b`.',
        '`assertTrue(x)`: بيتأكد إن `x` قيمتها `True`.',
        '`assertFalse(x)`: بيتأكد إن `x` قيمتها `False`.',
        '`assertIsNone(x)`: بيتأكد إن `x` هي `None`.',
        '`assertIsNotNone(x)`: بيتأكد إن `x` مش `None`.',
        '`assertIn(a, b)`: بيتأكد إن `a` موجودة جوه `b` (مثلاً `a` عنصر و `b` قايمة).',
        '`assertRaises(exception, callable, *args, **kwargs)`: بيتأكد إن استدعاء `callable` بالـ arguments دي بيثير الاستثناء `exception`.'
      ]},
      { type: 'paragraph', text: '5. **تشغيل الاختبارات:** بنضيف في آخر ملف الاختبار الكود `if __name__ == "__main__": unittest.main()` عشان نقدر نشغل الاختبارات دي مباشرة من الترمنال.'},
      { type: 'paragraph', text: 'مثال: عندنا دالة بسيطة عايزين نختبرها في ملف اسمه `calculator.py`:'},
      { type: 'code', language: 'python', text:
`# calculator.py
def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x,y):
    if not all(isinstance(i, (int, float)) for i in [x,y]):
        raise TypeError("Inputs must be numbers")
    return x * y`
      },
      { type: 'paragraph', text: 'دلوقتي نعمل ملف الاختبار `test_calculator.py` في نفس المجلد:'},
      { type: 'code', language: 'python', text:
`# test_calculator.py
import unittest
from calculator import add, subtract, multiply # بنستورد الدوال اللي عايزين نختبرها

class TestCalculatorFunctions(unittest.TestCase): # لازم يرث من unittest.TestCase

    def test_add_positive_numbers(self):
        self.assertEqual(add(2, 3), 5, "الجمع المفروض يكون 5") # 2+3 المفروض يساوي 5
        self.assertEqual(add(10, 0), 10)

    def test_add_negative_numbers(self):
        self.assertEqual(add(-1, -1), -2)
        self.assertEqual(add(-5, 5), 0)

    def test_subtract(self):
        self.assertEqual(subtract(10, 5), 5)
        self.assertEqual(subtract(5, 10), -5)
    
    def test_multiply_numbers(self):
        self.assertEqual(multiply(3, 4), 12)
        self.assertEqual(multiply(-2, 5), -10)
        self.assertEqual(multiply(0, 100), 0)

    def test_multiply_raises_type_error(self):
        # نتأكد إن الدالة multiply بتعمل TypeError لو دخلنالها نص
        with self.assertRaises(TypeError):
            multiply(3, "a")
        
        with self.assertRaisesRegex(TypeError, "Inputs must be numbers"): # كمان ممكن نتأكد من رسالة الخطأ
             multiply("b", 5)


if __name__ == '__main__':
    unittest.main() # ده بيشغل مكتشف الاختبارات بتاع unittest`
      },
      { type: 'paragraph', text: 'لتشغيل الاختبارات، افتح الترمنال في نفس المجلد واكتب:'},
      { type: 'code', language: 'text', text: 'python -m unittest test_calculator.py\n# أو لو عندك أكتر من ملف اختبار ممكن تكتشفهم كلهم بـ:\n# python -m unittest discover' },
      { type: 'paragraph', text: 'لو كل الاختبارات نجحت، هتشوف رسالة بتقول `OK`. لو فيه اختبار فشل، هيقولك إنه فشل وإيه السبب.'},
      { type: 'subheading', text: 'لماذا نكتب الاختبارات؟' },
      { type: 'list', text: 'الفوائد كتير:', items:[
        '**الثقة في الكود:** بتديك ثقة إن الكود بتاعك شغال صح.',
        '**اكتشاف الأخطاء مبكراً:** بتساعدك تلاقي الأخطاء بدري في عملية التطوير، وده بيخلي إصلاحها أسهل وأرخص.',
        '**منع التراجع (Regression Prevention):** لما تعدل في الكود، الاختبارات بتحميك من إنك تبوظ حاجة كانت شغالة صح من غير ما تاخد بالك (Regression).',
        '**توثيق حي للكود:** الاختبارات بتوضح إزاي المفروض الكود بتاعك يشتغل وإيه النتايج المتوقعة منه.',
        '**تسهيل إعادة الهيكلة (Refactoring):** لو حبيت تغير تصميم الكود بتاعك أو تحسنه، الاختبارات بتديك شبكة أمان تتأكد بيها إنك مغيرتش السلوك الخارجي للبرنامج.'
      ]},
      { type: 'paragraph', text: 'فيه أطر عمل (Frameworks) تانية للاختبار في بايثون زي `pytest` اللي ناس كتير بتفضلها لأنها بتقدم طريقة كتابة اختبارات أبسط وأقوى في بعض الأحيان. بس فهم `unittest` بيديك أساس كويس.'},
      { type: 'paragraph', text: 'كتابة الاختبارات ممكن تبان إنها مجهود زيادة في الأول، لكن على المدى الطويل بتوفر وقت ومجهود كبير جداً وبتخلي جودة برامجك أعلى بكتير. حاول تعود نفسك تكتب اختبارات للأجزاء المهمة في تطبيقاتك!'}
    ],
    quiz: [
      { id: 'adv_test_1', text: 'ما هو الغرض الرئيسي من كتابة الاختبارات الوحدوية (Unit Tests)؟', options: ['لاختبار أداء البرنامج تحت ضغط عالي', 'لاختبار أصغر جزء من الكود (مثل دالة) بشكل منفصل للتأكد من أنه يعمل بشكل صحيح', 'لاختبار واجهة المستخدم الرسومية للتطبيق', 'لاختبار كيفية تفاعل جميع مكونات النظام معًا'], correctAnswerIndex: 1, explanation: 'الاختبارات الوحدوية تركز على صحة أصغر الوحدات في الكود.' },
      { id: 'adv_test_2', text: 'ما هو الموديول المدمج في بايثون الذي يستخدم عادة لإنشاء الاختبارات الوحدوية؟', options: ['`pytest`', '`doctest`', '`unittest`', '`testlib`'], correctAnswerIndex: 2, explanation: 'موديول `unittest` هو إطار العمل المدمج للاختبارات الوحدوية في بايثون.' },
      { id: 'adv_test_3', text: 'في موديول `unittest`، من أي صنف يجب أن يرث صنف الاختبارات الخاص بك؟', options: ['`unittest.Test`', '`unittest.Case`', '`unittest.TestCase`', '`unittest.TestSuite`'], correctAnswerIndex: 2, explanation: 'أصناف الاختبارات يجب أن ترث من `unittest.TestCase`.' },
      { id: 'adv_test_4', text: 'كيف يجب أن يبدأ اسم دالة الاختبار (test method) داخل صنف يرث من `unittest.TestCase`؟', options: ['بكلمة `assert_`', 'بكلمة `test_`', 'بكلمة `check_`', 'يمكن أن يكون أي اسم'], correctAnswerIndex: 1, explanation: 'أسماء دوال الاختبار يجب أن تبدأ بـ `test_` ليتم اكتشافها تلقائيًا بواسطة مشغل الاختبارات.' },
      { id: 'adv_test_5', text: 'أي دالة `assert` من `unittest.TestCase` تستخدم للتحقق من أن قيمتين متساويتين؟', options: ['`assertTrue(a == b)`', '`assertIdentical(a, b)`', '`assertEqual(a, b)`', '`assertSame(a, b)`'], correctAnswerIndex: 2, explanation: '`assertEqual(a, b)` تتحقق مما إذا كانت `a` و `b` متساويتين.' }
    ]
  },
  {
    id: 'l3-lesson-9',
    slug: 'async-programming-intro',
    title: 'البرمجة غير المتزامنة (Asynchronous Programming) مع `asyncio` (مقدمة)',
    description: 'مقدمة لمفهوم البرمجة غير المتزامنة وكيف يمكن لـ `asyncio` أن يساعد في بناء تطبيقات ذات أداء عالٍ، خاصة تلك التي تتعامل مع عمليات I/O كثيرة.',
    content: [
      { type: 'heading', text: 'الشغل على كذا حاجة في نفس الوقت (تقريباً!): مقدمة لـ `asyncio`' },
      { type: 'paragraph', text: 'تخيل إنك بتطبخ، وعندك كذا حاجة على النار: الرز بيستوي، والشوربة بتغلي، والخضار بيتشوح. لو إنت بتعمل كل حاجة "بالترتيب" (Synchronous)، هتستنى الرز يخلص خالص، بعدين تبدأ في الشوربة وتستناها تخلص، بعدين الخضار. ده هياخد وقت طويل!' },
      { type: 'paragraph', text: 'البرمجة غير المتزامنة (Asynchronous Programming) بتسمحلك تعمل حاجة مشابهة: لما يكون عندك مهمة بتاخد وقت عشان تخلص (زي إنك تستنى رد من سيرفر على النت، أو تقرا ملف كبير)، بدل ما البرنامج بتاعك يقف مستني المهمة دي تخلص، ممكن يسيبها شغالة في الخلفية ويروح يعمل حاجة تانية مفيدة، ولما المهمة الأولانية تخلص يرجع يكمل شغل عليها. ده بيخلي البرنامج بتاعك يبان كأنه بيعمل كذا حاجة في "نفس الوقت" (Concurrency) وبيحسن الأداء بشكل كبير، خصوصاً في العمليات اللي فيها انتظار كتير (I/O-bound operations).' },
      { type: 'subheading', text: 'ما هو `asyncio`؟' },
      { type: 'paragraph', text: '`asyncio` هو موديول في بايثون (موجود في المكتبة القياسية من بايثون 3.4+) بيوفر الأدوات اللازمة لكتابة كود غير متزامن باستخدام أسلوب الدوال الفرعية غير المتزامنة (Coroutines) وحلقات الأحداث (Event Loops).'},
      { type: 'subheading', text: 'المفاهيم الأساسية في `asyncio`:' },
      { type: 'list', text: '', items: [
        '**الدوال الفرعية غير المتزامنة (Coroutines - `async def`):** دي دوال خاصة بنعرفها باستخدام `async def` بدل `def` العادية. لما بنستدعي دالة زي دي، مش بتشتغل علطول، لأ، بترجع كائن "coroutine object". عشان نشغلها فعلاً، لازم نستخدم معاها كلمة `await` أو نسلمها لحلقة الأحداث.',
        '**كلمة `await`:** بنستخدمها جوه دالة `async def` عشان "نستنى" نتيجة coroutine تاني أو أي كائن "awaitable" (زي الـ Future أو Task). لما البرنامج بيوصل لـ `await`، بيوقف تنفيذ الـ coroutine الحالي مؤقتاً (من غير ما يعطل البرنامج كله) وبيسمح لحلقة الأحداث إنها تشغل حاجات تانية، لحد ما نتيجة الـ `await` تجهز، ساعتها الـ coroutine بيكمل شغله.',
        '**حلقة الأحداث (Event Loop):** دي قلب `asyncio`. هي المسؤولة عن إدارة وتشغيل الـ coroutines المختلفة، وتحديد مين يشتغل إمتى. بتشغل coroutine لحد ما يوصل لـ `await` أو يخلص، بعدين بتشوف لو فيه coroutines تانية جاهزة للشغل وهكذا.',
        '**المهام (Tasks):** بنستخدمها عشان نرتب ونشغل الـ coroutines بشكل متزامن (concurrently) جوه حلقة الأحداث. ممكن نعمل Task من coroutine باستخدام `asyncio.create_task()`.'
      ]},
      { type: 'code', language: 'python', text:
`import asyncio
import time

async def say_after(delay, what): # دي coroutine
    print(f"هقول '{what}' بعد {delay} ثانية (بدأنا نعد).")
    await asyncio.sleep(delay) # asyncio.sleep هي نسخة غير متزامنة من time.sleep
                               # await بتوقف say_after مؤقتاً وبتدي فرصة لحاجات تانية تشتغل
    print(what)
    return f"قلت '{what}' خلاص!"

async def main(): # الـ coroutine الرئيسي اللي هيشغل الباقي
    print(f"بدأنا البرنامج الساعة {time.strftime('%X')}")

    # الطريقة الأولى: تشغيلهم بالترتيب (واحد ورا التاني)
    # result1 = await say_after(2, "أهلاً")
    # result2 = await say_after(1, "يا عالم")
    # print(f"النتيجة 1: {result1}")
    # print(f"النتيجة 2: {result2}")

    # الطريقة الثانية: تشغيلهم بشكل "متزامن" (concurrently) باستخدام Tasks
    task1 = asyncio.create_task(say_after(2, "مرحباً"))
    task2 = asyncio.create_task(say_after(1, "بالجميع"))
    
    print("عملنا الـ Tasks، دلوقتي هنستناهم يخلصوا...")
    
    # await بتستنى الـ Task يخلص وترجع النتيجة بتاعته
    result_from_task1 = await task1 
    result_from_task2 = await task2

    print(f"نتيجة Task 1: {result_from_task1}")
    print(f"نتيجة Task 2: {result_from_task2}")

    # طريقة تانية لاستدعاء كذا coroutine مع بعض هي asyncio.gather
    # results = await asyncio.gather(
    #     say_after(3, "بايثون"),
    #     say_after(1.5, "رائعة")
    # )
    # print(f"نتائج gather: {results}")


    print(f"خلصنا البرنامج الساعة {time.strftime('%X')}")

# عشان نشغل الـ coroutine الرئيسي (main) ده، بنستخدم asyncio.run()
# (ده متاح من بايثون 3.7+، لو إصدار أقدم بتحتاج تعمل حلقة أحداث بنفسك)
if __name__ == "__main__":
    asyncio.run(main())`
      },
      { type: 'paragraph', text: 'لو شغلت الكود بالطريقة التانية (بتاعة الـ Tasks)، هتلاحظ إن رسالة "مرحباً بالجميع" (اللي المفروض تاخد ثانية واحدة) ممكن تظهر قبل رسالة "مرحباً" (اللي المفروض تاخد ثانيتين)، أو على الأقل الاتنين هيبدأوا العد في نفس الوقت تقريباً. ده لأن `await task1` و `await task2` هيسمحوا لحلقة الأحداث تبدل بينهم.'},
      { type: 'subheading', text: 'متى نستخدم `asyncio`؟' },
      { type: 'paragraph', text: '`asyncio` بيكون مفيد جداً في المواقف دي:'},
      { type: 'list', text: '', items: [
        '**العمليات اللي فيها انتظار كتير (I/O-bound):** زي طلبات الشبكة (APIs، قواعد بيانات بعيدة)، قراءة وكتابة الملفات بشكل غير متزامن. `asyncio` بيخلي البرنامج يستغل وقت الانتظار ده في عمل حاجات تانية.',
        '**تطبيقات الشبكات عالية الأداء:** زي بناء سيرفرات ويب أو شات بتقدر تخدم عدد كبير من العملاء في نفس الوقت.',
        '**التعامل مع تدفقات البيانات (Streaming).**'
      ]},
      { type: 'paragraph', text: '`asyncio` مش مناسب أوي للعمليات اللي بتستهلك CPU بشكل كبير (CPU-bound) زي عمليات حسابية معقدة أو معالجة صور. في الحالة دي، استخدام الـ threading أو الـ multiprocessing ممكن يكون أفضل.'},
      { type: 'paragraph', text: 'البرمجة غير المتزامنة مع `asyncio` ممكن تبان معقدة شوية في الأول، خصوصاً مفاهيم `async` و `await` وحلقة الأحداث. بس لما تفهمها كويس، هتلاقيها أداة قوية جداً لبناء تطبيقات سريعة ومستجيبة. مكاتب كتير في بايثون بدأت تدعم `asyncio` (زي مكتبات قواعد البيانات وطلبات HTTP).'}
    ],
    quiz: [
      { id: 'adv_async_1', text: 'ما هو الغرض الرئيسي من استخدام `asyncio` في بايثون؟', options: ['لتشغيل الكود بشكل أبطأ لسهولة التصحيح', 'لتحسين أداء العمليات كثيفة الاستخدام للمعالج (CPU-bound)', 'لتحسين أداء العمليات التي تتضمن انتظارًا طويلاً (I/O-bound) عن طريق السماح بتنفيذ مهام أخرى أثناء الانتظار', 'لاستبدال الحاجة إلى استخدام الدوال العادية'], correctAnswerIndex: 2, explanation: '`asyncio` مثالي للعمليات التي تتضمن انتظارًا (مثل الشبكات والملفات) لأنه يسمح باستغلال وقت الانتظار.' },
      { id: 'adv_async_2', text: 'كيف يتم تعريف دالة فرعية غير متزامنة (coroutine) في بايثون؟', options: ['باستخدام `def async function_name():`', 'باستخدام `async def function_name():`', 'باستخدام `coroutine def function_name():`', 'باستخدام `def function_name() await:`'], correctAnswerIndex: 1, explanation: 'نستخدم `async def` لتعريف coroutine.' },
      { id: 'adv_async_3', text: 'ماذا تفعل كلمة `await` عند استخدامها داخل coroutine؟', options: ['تنهي الـ coroutine فورًا', 'توقف تنفيذ الـ coroutine الحالي مؤقتًا حتى يكتمل التعبير الـ awaitable الذي يليها، وتسمح لحلقة الأحداث بتشغيل مهام أخرى', 'تطبع قيمة التعبير الذي يليها', 'تتسبب في حدوث خطأ دائمًا'], correctAnswerIndex: 1, explanation: '`await` تسمح بالتوقف المؤقت للـ coroutine الحالي وإعطاء التحكم لحلقة الأحداث.' },
      { id: 'adv_async_4', text: 'ما هي "حلقة الأحداث" (Event Loop) في `asyncio`؟', options: ['نوع خاص من حلقات `for`', 'الآلية المركزية التي تدير وتنفذ الـ coroutines والمهام غير المتزامنة', 'دالة تستخدم لإنشاء أخطاء مخصصة', 'مكتبة خارجية يجب تثبيتها بشكل منفصل'], correctAnswerIndex: 1, explanation: 'حلقة الأحداث هي المسؤولة عن جدولة وتشغيل العمليات غير المتزامنة.' },
      { id: 'adv_async_5', text: 'أي دالة من `asyncio` تستخدم لتشغيل coroutine رئيسي وبدء حلقة الأحداث (في بايثون 3.7+)؟', options: ['`asyncio.start()`', '`asyncio.execute()`', '`asyncio.run()`', '`asyncio.begin_loop()`'], correctAnswerIndex: 2, explanation: '`asyncio.run()` هي الطريقة الموصى بها لبدء تنفيذ coroutine رئيسي في الإصدارات الحديثة من بايثون.' }
    ]
  },
  {
    id: 'l3-lesson-10',
    slug: 'project-structuring-packaging',
    title: 'هيكلة المشاريع الكبيرة وتغليف التطبيقات (Packaging)',
    description: 'تعلم أفضل الممارسات لتنظيم ملفات ومجلدات المشاريع الكبيرة، وكيفية تحويل مشروعك إلى حزمة قابلة للتثبيت والتوزيع.',
    content: [
      { type: 'heading', text: 'من الفوضى للنظام: هيكلة المشاريع وتغليفها' },
      { type: 'paragraph', text: 'لما بتبدأ مشروع بايثون صغير، ممكن تحط كل الكود بتاعك في ملف واحد أو ملفين والدنيا تمشي. لكن لما المشروع بيكبر وبيبقى فيه وظايف كتير ومكونات مختلفة، الطريقة دي مش هتنفع. الكود هيبقى صعب الفهم والصيانة، وهيحصل تداخل بين الأجزاء المختلفة. هنا بتيجي أهمية "هيكلة المشروع" (Project Structuring) بشكل كويس.' },
      { type: 'paragraph', text: 'ولو عايز تشارك مشروعك ده مع ناس تانية أو تستخدمه في مشاريع تانية أو حتى تنشره عشان الناس تثبته بسهولة، هتحتاج تعمله "تغليف" (Packaging).' },
      { type: 'subheading', text: 'لماذا نهتم بهيكلة المشروع؟' },
      { type: 'list', text: 'الأسباب الرئيسية:', items: [
        '**سهولة الفهم (Readability):** لما الملفات تكون منظمة، أي حد (حتى إنت بعد فترة) يقدر يفهم المشروع ماشي إزاي بسرعة.',
        '**سهولة الصيانة (Maintainability):** لو فيه خطأ أو عايز تعدل حاجة، هتعرف توصل للمكان الصح بسهولة من غير ما تأثر على باقي الأجزاء.',
        '**قابلية التوسع (Scalability):** لما المشروع يكون منظم، بيبقى أسهل تضيف وظايف جديدة أو تكبره.',
        '**التعاون (Collaboration):** لو أكتر من مبرمج شغالين على نفس المشروع، الهيكل الواضح بيسهل شغلهم مع بعض.',
        '**إعادة الاستخدام (Reusability):** ممكن تاخد أجزاء معينة (زي موديولات) من مشروع منظم وتستخدمها في مشاريع تانية.'
      ]},
      { type: 'subheading', text: 'هيكل مشروع بايثون بسيط ومقترح:' },
      { type: 'paragraph', text: 'مفيش طريقة واحدة "صح" ١٠٠٪ لهيكلة كل المشاريع، الموضوع بيعتمد على حجم ونوع المشروع. بس فيه هيكل عام ناس كتير بتستخدمه وبيعتبر بداية كويسة:'},
      { type: 'code', language: 'text', text:
`my_project_root/
├── my_app_package_name/       # ده اسم الحزمة الرئيسية بتاعتك (اللي الناس هتستورد منها)
│   ├── __init__.py            # بيخلي المجلد ده حزمة بايثون
│   ├── main_module.py         # موديول رئيسي أو نقطة دخول لتطبيقك
│   ├── another_module.py      # موديولات تانية بتقسم فيها وظايف البرنامج
│   └── sub_package/           # ممكن يكون عندك حزم فرعية جوا الحزمة الرئيسية
│       ├── __init__.py
│       └── some_feature.py
├── tests/                     # مجلد للاختبارات
│   ├── __init__.py            # عشان tests يكون حزمة برضه (مفيد لبعض أدوات الاختبار)
│   ├── test_main_module.py
│   └── test_another_module.py
├── data/                      # (اختياري) لتخزين ملفات البيانات (زي CSV, JSON)
├── docs/                      # (اختياري) لملفات التوثيق
├── .gitignore                 # ملف لـ Git عشان يتجاهل ملفات معينة (زي .pyc أو البيئات الافتراضية)
├── README.md                  # ملف مهم بيشرح المشروع وإزاي تستخدمه وتثبته
├── requirements.txt           # قايمة بالمكتبات الخارجية اللي مشروعك بيعتمد عليها
└── setup.py                   # (أو pyproject.toml) ملف مهم جداً لعملية التغليف والتوزيع`
      },
      { type: 'list', text: 'شرح المكونات:', items: [
        '`my_app_package_name/`: ده قلب التطبيق بتاعك. المفروض يكون جواه كل الكود اللي بيشغل التطبيق. اسمه بيكون الاسم اللي الناس هتكتبه لما تعمل `import your_app_package_name`.',
        '`__init__.py`: الملف ده (حتى لو فاضي) بيقول لبايثون إن المجلد ده عبارة عن حزمة (Package). ممكن تحط فيه كود بيشتغل أول ما الحزمة بتستورد، أو تعرف فيه إيه الحاجات اللي عايزها تكون متاحة مباشرة لما حد يعمل `from my_app_package_name import ...`.',
        '`tests/`: مجلد بتحط فيه كل ملفات الاختبارات بتاعتك. تنظيم الاختبارات بيخليها سهلة الإدارة والتشغيل.',
        '`README.md`: ملف Markdown بيشرح المشروع، إيه فايدته، إزاي تثبته، إزاي تشغله، أي معلومات مهمة للمستخدم أو المطور التاني.',
        '`requirements.txt`: ملف نصي بسيط بتحط فيه أسماء كل المكتبات الخارجية اللي مشروعك بيستخدمها (مع إصداراتها لو حبيت). أي حد تاني عايز يشغل مشروعك، ممكن يثبت كل المكتبات دي مرة واحدة باستخدام أمر زي `pip install -r requirements.txt`. ممكن تعمل الملف ده تلقائياً باستخدام `pip freeze > requirements.txt` (بس ده هيحط كل حاجة في بيئتك الافتراضية، فالأفضل تكتبه يدوي أو تستخدم أدوات إدارة اعتماديات).',
        '`setup.py` (التقليدي) أو `pyproject.toml` (الأحدث): دي ملفات بتستخدمها أدوات بناء وتغليف بايثون (زي `setuptools` و `pip`) عشان يعرفوا إزاي يبنوا الحزمة بتاعتك ويوزعوها. بيكون فيها معلومات عن اسم الحزمة، الإصدار، المؤلف، الاعتماديات، ونقط الدخول (لو تطبيقك ليه أوامر بتشتغل من الترمنال).'
      ]},
      { type: 'subheading', text: 'تغليف التطبيق (Packaging):' },
      { type: 'paragraph', text: 'بعد ما نظمت مشروعك، ممكن تكون عايز تعمله "حزمة" (Package) عشان الناس تقدر تثبتها بسهولة باستخدام `pip install your_package_name` أو عشان تقدر تستخدمها في مشاريع تانية عندك.'},
      { type: 'paragraph', text: 'العملية دي اتطورت مع الوقت في بايثون. زمان كنا بنعتمد بشكل أساسي على ملف `setup.py` مع مكتبة `setuptools`. حالياً، الاتجاه الأحدث هو استخدام ملف `pyproject.toml` اللي بيوصف إزاي المشروع بتاعك بيتبني وإيه الأدوات اللي بيستخدمها (زي `setuptools`, `poetry`, `flit`).'},
      { type: 'paragraph', text: 'خطوات التغليف الأساسية (باستخدام `setuptools` و `pyproject.toml` كمثال حديث):'},
      { type: 'list', text: '1. **إنشاء ملف `pyproject.toml`:**', items: [
        'ده ملف بصيغة TOML بيحدد نظام البناء (Build System) اللي هتستخدمه (عادةً `setuptools`) وبيانات المشروع (Metadata) زي اسم الحزمة، الإصدار، الوصف، المؤلف، الاعتماديات، إلخ.'
      ]},
      { type: 'code', language: 'text', text:
`# مثال بسيط لمحتوى pyproject.toml

[build-system]
requires = ["setuptools>=61.0"] # بنحدد إننا محتاجين setuptools
build-backend = "setuptools.build_meta"
backend-path = ["."] # لو عندك backend مخصص

[project]
name = "my_bod_code_utility"
version = "0.1.0"
authors = [
  { name="Bod Code Team", email="team@bodcode.example.com" },
]
description = "مكتبة أدوات مساعدة رائعة من Bod Code."
readme = "README.md" # ملف الـ README بتاعك
requires-python = ">=3.8" # أقل إصدار بايثون بتدعمه
classifiers = [ # تصنيفات للمشروع بتساعد في البحث عنه على PyPI
    "Programming Language :: Python :: 3",
    "License :: OSI Approved :: MIT License", # نوع الرخصة
    "Operating System :: OS Independent",
]
dependencies = [ # الاعتماديات اللي مشروعك محتاجها
    "requests>=2.20", 
    # "another_library==1.5.0",
]

[project.urls] # روابط مفيدة
"Homepage" = "https://github.com/yourusername/my_bod_code_utility"
"Bug Tracker" = "https://github.com/yourusername/my_bod_code_utility/issues"

# لو عندك سكربتات عايزها تشتغل من الترمنال بعد التثبيت
# [project.scripts]
# my-cool-command = "my_app_package_name.main_module:main_function"`
      },
      { type: 'list', text: '2. **بناء الحزمة:**', items: [
        'بعد ما تعمل `pyproject.toml` (وممكن يكون معاك `setup.cfg` أو `setup.py` لو بتستخدم إعدادات أقدم أو أكثر تعقيدًا لـ `setuptools`)، هتحتاج أداة بناء زي موديول `build` بتاع بايثون (ممكن تثبته بـ `pip install build`).',
        'في الترمنال، في المجلد الرئيسي لمشروعك، بتشغل الأمر: `python -m build`',
        'ده هينشئ مجلد اسمه `dist/` جواه نوعين من الملفات:',
        '  - **Source Distribution (sdist):** بيكون ملف مضغوط (زي `.tar.gz`) فيه الكود المصدري بتاعك وملفات الإعداد. ده بيسمح للناس تبني الحزمة على أنظمتهم.',
        '  - **Built Distribution (Wheel):** بيكون ملف بامتداد `.whl`. ده بيكون "متجمع" (compiled) وجاهز للتثبيت مباشرة باستخدام `pip` وبيكون أسرع في التثبيت. (الـ Wheel هو الصيغة المفضلة حالياً).'
      ]},
      { type: 'list', text: '3. **تثبيت الحزمة محلياً (اختياري للاختبار):**', items: [
        'ممكن تثبت ملف الـ Wheel اللي عملته عشان تجربه: `pip install dist/your_package_name-0.1.0-py3-none-any.whl`'
      ]},
      { type: 'list', text: '4. **نشر الحزمة على PyPI (Python Package Index) (اختياري):**', items: [
        'لو عايز تخلي الحزمة بتاعتك متاحة للناس كلها عشان يثبتوها بـ `pip install your_package_name`، لازم ترفعها على PyPI (pypi.org).',
        'هتحتاج تعمل حساب على PyPI (وعلى TestPyPI عشان تجرب الأول).',
        'هتحتاج أداة زي `twine` (تثبتها بـ `pip install twine`) عشان ترفع ملفاتك اللي في `dist/` بشكل آمن.',
        'الأوامر بتكون حاجة زي: `twine upload --repository testpypi dist/*` (لـ TestPyPI) أو `twine upload dist/*` (لـ PyPI الحقيقي).'
      ]},
      { type: 'paragraph', text: 'هيكلة المشاريع وتغليفها مواضيع كبيرة وفيها تفاصيل كتير، بس الأساسيات دي هتساعدك تبدأ بشكل كويس. كل ما مشاريعك تكبر وتتعقد، كل ما هتحس بأهمية التنظيم ده. فيه أدوات تانية زي `Poetry` أو `PDM` بتقدم تجربة متكاملة لإدارة الاعتماديات والبيئات الافتراضية والتغليف ممكن تبص عليها لما مستواك يتقدم.'}
    ],
    quiz: [
      { id: 'adv_struct_1', text: 'ما هو اسم الملف الذي يجب أن يوجد داخل مجلد لكي يعتبره بايثون حزمة (Package)؟', options: ['`main.py`', '`__init__.py`', '`package.py`', '`module.py`'], correctAnswerIndex: 1, explanation: 'ملف `__init__.py` (حتى لو فارغ) يميز المجلد كحزمة بايثون.' },
      { id: 'adv_struct_2', text: 'ما هو الغرض الرئيسي من ملف `requirements.txt` في مشروع بايثون؟', options: ['لتوثيق الكود', 'لتحديد المكتبات الخارجية التي يعتمد عليها المشروع وإصداراتها', 'لتشغيل الاختبارات', 'لتخزين إعدادات المستخدم'], correctAnswerIndex: 1, explanation: '`requirements.txt` يسرد الاعتماديات الخارجية للمشروع لتسهيل تثبيتها.' },
      { id: 'adv_struct_3', text: 'في هيكل المشروع المقترح، أين يتم وضع ملفات الاختبارات عادةً؟', options: ['في نفس مجلد الكود الرئيسي', 'في مجلد اسمه `src/`', 'في مجلد منفصل اسمه `tests/`', 'في ملف `README.md`'], correctAnswerIndex: 2, explanation: 'من المتعارف عليه وضع الاختبارات في مجلد منفصل مثل `tests/`.' },
      { id: 'adv_struct_4', text: 'ما هو الملف الأحدث والأكثر تفضيلاً حاليًا لوصف بيانات المشروع ونظام البناء لعملية التغليف في بايثون (بدلاً من `setup.py` فقط)؟', options: ['`config.xml`', '`manifest.json`', '`pyproject.toml`', '`build.gradle`'], correctAnswerIndex: 2, explanation: '`pyproject.toml` هو المعيار الحديث (PEP 517/518) لتحديد نظام البناء وبيانات المشروع.' },
      { id: 'adv_struct_5', text: 'ما هو نوع ملف التوزيع (Built Distribution) المفضل في بايثون والذي يكون جاهزًا للتثبيت السريع باستخدام `pip`؟', options: ['`.zip`', '`.tar.gz` (sdist)', '`.exe`', '`.whl` (Wheel)'], correctAnswerIndex: 3, explanation: 'ملفات الـ Wheel (`.whl`) هي الصيغة المبنية المفضلة لأنها أسرع في التثبيت.' }
    ]
  },
  {
    id: 'l3-lesson-11',
    slug: 'error-logging-monitoring',
    title: 'تسجيل الأخطاء ومراقبة أداء التطبيقات (أساسيات)',
    description: 'مقدمة لوحدة `logging` وكيفية استخدامها لتسجيل معلومات مفيدة عن سير عمل التطبيق والأخطاء، مما يساعد في التصحيح والمراقبة.',
    content: [
      { type: 'heading', text: 'المخبر السري لتطبيقك: تسجيل الأخطاء والمراقبة' },
      { type: 'paragraph', text: 'لما تطبيقك بيشتغل عند المستخدمين أو على سيرفر، مش هتقدر تشوف الـ `print()` اللي كنت بتستخدمها عشان تتبع المشاكل وقت التطوير. طب لو حصل خطأ غريب، أو لو عايز تعرف إيه اللي بيحصل جوه التطبيق وهو شغال؟ هنا بيجي دور "تسجيل الأحداث" (Logging).' },
      { type: 'paragraph', text: 'الـ Logging ده عملية بنسجل فيها معلومات عن الأحداث المهمة اللي بتحصل في البرنامج بتاعنا، زي رسائل خطأ، تحذيرات، معلومات عن سير العمل، أو حتى رسائل تصحيح (debug messages). المعلومات دي ممكن تتسجل في ملف على السيرفر، أو تتبعت لنظام مركزي لتجميع الـ logs، أو حتى تظهر في الترمنال بطريقة منظمة.' },
      { type: 'subheading', text: 'لماذا نستخدم Logging بدلاً من `print()`؟' },
      { type: 'list', text: '', items: [
        '**التحكم في مستوى التفاصيل (Log Levels):** ممكن تحدد إيه نوع الرسائل اللي عايز تسجلها (زي DEBUG, INFO, WARNING, ERROR, CRITICAL). في بيئة الإنتاج، ممكن تسجل الأخطاء والتحذيرات بس، وفي بيئة التطوير ممكن تزود التفاصيل وتسجل DEBUG و INFO.',
        '**المرونة في وجهة التسجيل (Output Destination):** ممكن توجه الـ logs لملفات، للترمنال، لخدمات خارجية، إلخ، وكل ده من غير ما تغير الكود بتاعك كتير.',
        '**التنسيق الموحد (Formatting):** ممكن تحدد شكل موحد لكل رسائل الـ log، زي إنها تحتوي على الوقت، اسم الموديول، مستوى الخطأ، والرسالة نفسها.',
        '**إمكانية التعطيل/التفعيل بسهولة:** ممكن تقفل أو تفتح تسجيل أنواع معينة من الرسائل من غير ما تحتاج تمسح أو تعلق سطور `print` في كل حتة.',
        '**معلومات سياقية أفضل:** أنظمة الـ logging بتضيف معلومات مفيدة زي اسم الملف ورقم السطر اللي حصل فيه الحدث.'
      ]},
      { type: 'subheading', text: 'موديول `logging` في بايثون:' },
      { type: 'paragraph', text: 'بايثون بييجي معاه موديول مدمج قوي جداً للـ logging اسمه `logging`. بيوفرلك كل الأدوات اللي محتاجها.'},
      { type: 'subheading', text: 'المكونات الأساسية لموديول `logging`:' },
      { type: 'list', text: '', items: [
        '**Loggers:** دي الكائنات اللي بتستخدمها في الكود بتاعك عشان تبعت رسائل الـ log. كل logger بيكون ليه اسم (عادةً اسم الموديول اللي هو فيه، زي `logging.getLogger(__name__)`) ومستوى (level).',
        '**Handlers:** دي اللي بتحدد إيه اللي هيحصل لرسالة الـ log بعد ما الـ logger يبعتها. مثلاً، `FileHandler` بيكتب الرسائل في ملف، و `StreamHandler` بيبعتها للترمنال (زي `sys.stdout` أو `sys.stderr`). ممكن تضيف أكتر من handler لنفس الـ logger.',
        '**Formatters:** دي بتتحكم في شكل (تنسيق) رسالة الـ log النهائية. بتحدد إيه المعلومات اللي هتظهر (وقت، مستوى، رسالة، إلخ) وبأي ترتيب.',
        '**Filters (أقل استخداماً للمبتدئين):** بتدي تحكم أدق في إيه الرسائل اللي هتمر من الـ logger للـ handler.'
      ]},
      { type: 'subheading', text: 'مستويات التسجيل (Log Levels):' },
      { type: 'paragraph', text: 'موديول `logging` بيعرف كذا مستوى للرسائل، مترتبين حسب الأهمية (من الأقل للأعلى):'},
      { type: 'list', text: '', items: [
        '`DEBUG`: معلومات تفصيلية جداً، مفيدة بس وقت تصحيح الأخطاء (Debugging).',
        '`INFO`: رسائل بتأكد إن الحاجات ماشية زي المتوقع (معلومات عامة عن سير العمل).',
        '`WARNING`: بتشير لحاجة غير متوقعة حصلت، أو مشكلة ممكن تحصل في المستقبل، بس البرنامج لسه شغال (زي استخدام دالة قديمة هتشال قريب). (ده المستوى الافتراضي للـ root logger).',
        '`ERROR`: بسبب مشكلة جدية أكتر، البرنامج مقدرش يعمل جزء معين من وظيفته.',
        '`CRITICAL`: خطأ خطير جداً، البرنامج ممكن ميقدرش يكمل شغل خالص.'
      ]},
      { type: 'paragraph', text: 'لما بتظبط مستوى الـ log لـ logger معين (أو handler)، هو هيسجل الرسائل اللي من المستوى ده "واللي أعلى منه". يعني لو ظبطت المستوى على `INFO`، هيسجل `INFO`, `WARNING`, `ERROR`, `CRITICAL`، بس مش هيسجل `DEBUG`.'},
      { type: 'code', language: 'python', text:
`import logging

# --- الإعداد الأساسي جداً (بيظبط الـ root logger) ---
# لو عايز تسجل في ملف، ممكن تعمل كده:
# logging.basicConfig(filename='app.log', level=logging.DEBUG, 
#                     format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

# لو عايز تسجل في الترمنال بمستوى معين وتنسيق معين:
logging.basicConfig(level=logging.INFO, # هيسجل INFO وأعلى
                    format='%(asctime)s | %(levelname)s | %(name)s (%(lineno)d) | %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S') # شكل الوقت

# الحصول على logger خاص بموديولك الحالي (عادة كويسة)
logger = logging.getLogger(__name__) # __name__ هيكون اسم الموديول (مثلاً "__main__")

def divide_numbers(a, b):
    logger.debug(f"الدالة divide_numbers استدعيت بالقيم: a={a}, b={b}")
    try:
        result = a / b
        logger.info(f"القسمة تمت بنجاح: {a}/{b} = {result}")
        return result
    except ZeroDivisionError:
        logger.error(f"محاولة القسمة على صفر! a={a}, b={b}", exc_info=True) # exc_info=True بتضيف معلومات الـ traceback للـ log
        # ممكن كمان نعمل logger.exception("رسالة") وهي بتعمل زي error بس بتضيف الـ traceback تلقائياً لو جوه except
        return None
    except TypeError:
        logger.warning(f"أنواع بيانات غير متوافقة للقسمة: a type {type(a)}, b type {type(b)}")
        return None

# تجربة
logger.info("البرنامج بدأ.")
divide_numbers(10, 2)
divide_numbers(5, 0)
divide_numbers(10, "x")
logger.critical("ده حدث حرج جداً! (مثال بس)")
logger.info("البرنامج انتهى (أو على وشك).")`
      },
      { type: 'subheading', text: 'إعداد Logging أكثر تقدماً (باستخدام Handlers و Formatters):' },
      { type: 'paragraph', text: 'لو عايز تحكم كامل، ممكن تعمل logger وتضيفله handlers و formatters بنفسك:'},
      { type: 'code', language: 'python', text:
`import logging

# 1. إنشاء Logger
my_app_logger = logging.getLogger('MyBodCodeApp')
my_app_logger.setLevel(logging.DEBUG) # Logger ده هيقبل كل الرسائل من DEBUG وأعلى

# 2. إنشاء Handler (مثلاً للكتابة في ملف)
file_handler = logging.FileHandler('my_app_detailed.log', mode='w', encoding='utf-8')
file_handler.setLevel(logging.WARNING) # الـ Handler ده هيسجل بس WARNING وأعلى

# 3. إنشاء Formatter
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(module)s.%(funcName)s:%(lineno)d - %(message)s')

# 4. ربط الـ Formatter بالـ Handler
file_handler.setFormatter(formatter)

# 5. ربط الـ Handler بالـ Logger
my_app_logger.addHandler(file_handler)

# ممكن نضيف handler تاني للترمنال مثلاً
stream_handler = logging.StreamHandler() # بيبعت لـ stderr افتراضياً
stream_handler.setLevel(logging.INFO)
stream_formatter = logging.Formatter('%(levelname)s: %(message)s')
stream_handler.setFormatter(stream_formatter)
my_app_logger.addHandler(stream_handler)


# استخدام الـ logger بتاعنا
my_app_logger.debug("رسالة debug مش هتظهر في الملف ولا الترمنال (حسب إعدادات الـ handlers).")
my_app_logger.info("معلومة مهمة هتظهر في الترمنال بس.")
my_app_logger.warning("تحذير! ده هيتسجل في الملف وفي الترمنال.")
my_app_logger.error("حصل خطأ، هيتسجل في الملف وفي الترمنال.")

def some_function():
    my_app_logger.info("جوه some_function")

some_function()`
      },
      { type: 'paragraph', text: 'الـ Logging مهارة مهمة جداً لما تطبيقاتك بتكبر أو بتشتغل في بيئة إنتاج. بيساعدك تفهم إيه اللي بيحصل وتلاقي المشاكل بسرعة. استثمر وقتك في إنك تتعلم إزاي تستخدمه صح!'}
    ],
    quiz: [
      { id: 'adv_log_1', text: 'ما هو المستوى الافتراضي الذي يبدأ به الـ root logger في موديول `logging` إذا لم يتم عمل `basicConfig`؟', options: ['`DEBUG`', '`INFO`', '`WARNING`', '`ERROR`'], correctAnswerIndex: 2, explanation: 'المستوى الافتراضي للـ root logger هو `WARNING`.' },
      { id: 'adv_log_2', text: 'أي من مستويات التسجيل التالية يعتبر الأعلى في الأهمية (الأكثر خطورة)؟', options: ['`DEBUG`', '`INFO`', '`WARNING`', '`CRITICAL`'], correctAnswerIndex: 3, explanation: '`CRITICAL` هو أعلى مستوى ويشير إلى خطأ خطير جداً.' },
      { id: 'adv_log_3', text: 'ما هي وظيفة الـ Handler في موديول `logging`؟', options: ['لتنسيق شكل رسالة الـ log', 'لتحديد مستوى أهمية رسالة الـ log', 'لتحديد إلى أين يتم إرسال رسالة الـ log (ملف، ترمنال، إلخ)', 'لتصفية رسائل الـ log بناءً على محتواها'], correctAnswerIndex: 2, explanation: 'الـ Handler هو المسؤول عن توجيه رسائل الـ log إلى وجهتها النهائية.' },
      { id: 'adv_log_4', text: 'إذا قمت بضبط مستوى الـ logger على `logging.INFO`، هل سيتم تسجيل رسالة تم إرسالها باستخدام `logger.debug("رسالة")`؟', options: ['نعم، لأن DEBUG أقل أهمية من INFO', 'لا، لأن DEBUG أقل أهمية من INFO ولن يتم تمريرها', 'نعم، سيتم تسجيل كل المستويات دائمًا', 'يعتمد على الـ Handler المستخدم'], correctAnswerIndex: 1, explanation: 'الـ Logger يمرر الرسائل التي تكون من مستواه المحدد "أو أعلى". DEBUG أقل من INFO فلن يتم تمريرها.' },
      { id: 'adv_log_5', text: 'ما فائدة استخدام `exc_info=True` عند استدعاء `logger.error()` أو `logger.exception()` داخل بلوك `except`؟', options: ['لجعل رسالة الخطأ باللون الأحمر', 'لإضافة معلومات الـ traceback (تتبع الخطأ) الكاملة إلى رسالة الـ log', 'لإيقاف البرنامج فورًا بعد تسجيل الخطأ', 'لتجاهل الخطأ وعدم تسجيله'], correctAnswerIndex: 1, explanation: '`exc_info=True` (أو استخدام `logger.exception()`) يضيف معلومات تتبع الخطأ التفصيلية إلى الـ log، مما يساعد في تحديد مصدر المشكلة.' }
    ]
  },
  {
    id: 'l3-lesson-12',
    slug: 'gui-programming-tkinter-intro',
    title: 'مقدمة في برمجة الواجهات الرسومية (GUI) مع Tkinter (أساسيات)',
    description: 'نظرة أولى على كيفية بناء تطبيقات سطح مكتب بسيطة بواجهة رسومية باستخدام مكتبة `Tkinter` المدمجة في بايثون.',
    content: [
      { type: 'heading', text: 'خلي برنامجك ليه وش وحركات: مقدمة لواجهات GUI مع Tkinter' },
      { type: 'paragraph', text: 'لحد دلوقتي، معظم البرامج اللي عملناها كانت بتشتغل في الترمنال (Command-Line Interface - CLI). المستخدم بيدخل أوامر نصية والبرنامج بيرد بنصوص. بس كتير من التطبيقات اللي بنستخدمها كل يوم (زي المتصفح، برامج الأوفيس، الألعاب) بيكون ليها "واجهة مستخدم رسومية" (Graphical User Interface - GUI). الواجهة دي بيكون فيها زراير، قوايم، مربعات نصوص، صور، وحاجات تانية المستخدم بيقدر يتفاعل معاها بالماوس والكيبورد.' },
      { type: 'paragraph', text: 'بايثون عنده كذا مكتبة ممكن تستخدمها عشان تعمل تطبيقات GUI. واحدة من أشهرهم وأسهلهم للبداية هي `Tkinter` (بتتنطق "تي كيه إنتر"). Tkinter مدمجة مع بايثون، فمش محتاج تثبتها بشكل منفصل.' },
      { type: 'subheading', text: 'المفاهيم الأساسية في Tkinter:' },
      { type: 'list', text: '', items: [
        '**النافذة الرئيسية (Root Window/Master):** دي النافذة الأساسية بتاعة تطبيقك اللي كل حاجة تانية بتتحط جواها. بنعملها من كلاس `Tk()` من موديول `tkinter`.',
        '**الأدوات (Widgets):** دي العناصر اللي بتكون الواجهة الرسومية زي الزراير (`Button`)، مربعات النصوص (`Entry` للإدخال، `Text` للعرض والتعديل)، العناوين (`Label`)، القوايم (`Menu`)، مربعات الاختيار (`Checkbutton`, `Radiobutton`)، إلخ. كل widget بيكون ليه خصائص (زي اللون، الحجم، النص اللي عليه) وأفعال ممكن تحصل عليه (زي لما المستخدم يضغط على زرار).',
        '**التخطيط (Layout Managers):** بعد ما تعمل الـ widgets، لازم تقول لـ Tkinter يحطهم فين في النافذة. فيه كذا طريقة للتخطيط:',
        '  - `pack()`: بيرص الـ widgets جنب بعض (فوق، تحت، يمين، شمال) وبيحاول يظبط حجم النافذة عليهم.',
        '  - `grid()`: بيقسم النافذة لشبكة من الصفوف والأعمدة، وإنت بتحط كل widget في خلية معينة.',
        '  - `place()`: بيسمحلك تحدد مكان وحجم الـ widget بالظبط بالإحداثيات (أقل استخداماً لأنه بيخلي الواجهة مش مرنة مع تغيير حجم النافذة).',
        '**حلقة الأحداث (Event Loop):** تطبيقات الـ GUI بتشتغل بـ "حلقة أحداث". النافذة بتفضل مستنية المستخدم يعمل حاجة (زي إنه يضغط على زرار أو يكتب نص). لما المستخدم بيعمل حاجة، ده بيكون "حدث" (Event). حلقة الأحداث بتمسك الحدث ده وبتشوف لو فيه كود معين المفروض يتنفذ كرد فعل للحدث ده (زي دالة مربوطة بزرار معين). بنشغل حلقة الأحداث دي باستخدام `root.mainloop()`.'
      ]},
      { type: 'subheading', text: 'مثال: تطبيق "أهلاً بالعالم" بسيط بـ Tkinter:' },
      { type: 'code', language: 'python', text:
`import tkinter as tk # بنستورد الموديول وبنديله اسم مستعار tk
from tkinter import ttk # ttk فيه widgets شكلها أحدث شوية

# 1. إنشاء النافذة الرئيسية
root = tk.Tk()
root.title("تطبيق Bod Code الأول") # عنوان النافذة
root.geometry("400x200") # حجم النافذة (عرض x ارتفاع)

# 2. إنشاء الأدوات (Widgets)
# Label (عنوان نصي)
welcome_label = ttk.Label(root, text="أهلاً بك في عالم Tkinter مع Bod Code!", font=("Tajawal", 16))

# Button (زرار)
def on_button_click(): # الدالة اللي هتشتغل لما الزرار يتضغط
    print("الزرار اتضغط!")
    welcome_label.config(text="تم الضغط على الزرار بنجاح!") # نغير نص الـ label

action_button = ttk.Button(root, text="اضغط هنا", command=on_button_click) # command بيحدد الدالة اللي هتشتغل

# 3. وضع الأدوات في النافذة (Layout)
# هنستخدم pack() هنا كمثال بسيط
welcome_label.pack(pady=20) # pady بتدي مسافة رأسية حوالين الـ label
action_button.pack(pady=10)

# 4. تشغيل حلقة الأحداث
root.mainloop() # السطر ده بيخلي النافذة تظهر وتفضل شغالة ومستنية تفاعل المستخدم
               # الكود اللي بعد السطر ده مش هيشتغل إلا لما النافذة تتقفل

print("النافذة اتقفلت، البرنامج خلص.")`
      },
      { type: 'subheading', text: 'ربط الـ Widgets بالمتغيرات (Control Variables):' },
      { type: 'paragraph', text: 'ساعات بنكون عايزين ناخد القيمة اللي المستخدم كتبها في مربع نص `Entry`، أو نعرف إذا كان `Checkbutton` متعلم عليه ولا لأ. Tkinter بيوفر "متغيرات تحكم" (Control Variables) خاصة زي `StringVar`, `IntVar`, `BooleanVar` عشان نربطها بالـ widgets دي ونتعامل مع قيمها بسهولة.'},
      { type: 'code', language: 'python', text:
`import tkinter as tk
from tkinter import ttk
from tkinter import messagebox # عشان نظهر رسايل منبثقة

def show_greeting():
    name = name_var.get() # ناخد القيمة من الـ StringVar
    if name:
        greeting_message = f"أهلاً وسهلاً، يا {name}!"
        messagebox.showinfo("ترحيب", greeting_message) # نظهر رسالة منبثقة
        # name_entry.delete(0, tk.END) # ممكن نمسح اللي في مربع النص بعد كده
    else:
        messagebox.showwarning("تنبيه", "من فضلك أدخل اسمك!")


app_window = tk.Tk()
app_window.title("برنامج ترحيب")
app_window.geometry("350x150")

# متغير تحكم من نوع String
name_var = tk.StringVar()

# Label
name_label = ttk.Label(app_window, text="أدخل اسمك:")
name_label.pack(pady=(10,0)) # مسافة فوق بس

# Entry (مربع إدخال نص) مربوط بالـ StringVar
name_entry = ttk.Entry(app_window, textvariable=name_var, width=30, font=("Tajawal", 12))
name_entry.pack(pady=5)
name_entry.focus() # نخلي التركيز على مربع النص ده أول ما البرنامج يشتغل

# Button
submit_button = ttk.Button(app_window, text="إرسال", command=show_greeting)
submit_button.pack(pady=10)

app_window.mainloop()`
      },
      { type: 'paragraph', text: 'Tkinter فيها widgets تانية كتير وإمكانيات أكتر (زي التعامل مع الصور، القوايم، الإطارات Frames عشان تنظم الـ widgets جوه النافذة بشكل أفضل، إلخ). دي كانت مجرد بداية بسيطة عشان تاخد فكرة.'},
      { type: 'paragraph', text: 'لو عايز تعمل تطبيقات GUI معقدة أكتر أو شكلها احترافي أكتر، فيه مكتبات تانية في بايثون ممكن تبص عليها زي PyQt أو Kivy، بس Tkinter بتفضل خيار كويس للمشاريع الصغيرة أو لما تكون عايز حاجة مدمجة ومش محتاجة تثبيتات إضافية.'}
    ],
    quiz: [
      { id: 'adv_gui_1', text: 'ما هي المكتبة المدمجة في بايثون التي تستخدم عادة لإنشاء واجهات مستخدم رسومية (GUI) بسيطة؟', options: ['`PyQt`', '`Kivy`', '`Tkinter`', '`wxPython`'], correctAnswerIndex: 2, explanation: '`Tkinter` هي مكتبة الـ GUI القياسية المدمجة مع بايثون.' },
      { id: 'adv_gui_2', text: 'ما هو اسم الكائن الذي يمثل النافذة الرئيسية في تطبيق Tkinter؟', options: ['`MainFrame`', '`RootWindow` أو `Tk()`', '`AppContainer`', '`DisplaySurface`'], correctAnswerIndex: 1, explanation: 'عادة ما يتم إنشاء النافذة الرئيسية كـ `root = tk.Tk()`.' },
      { id: 'adv_gui_3', text: 'أي من التالي "ليس" مدير تخطيط (Layout Manager) شائع في Tkinter؟', options: ['`pack()`', '`grid()`', '`align()`', '`place()`'], correctAnswerIndex: 2, explanation: '`align()` ليس مدير تخطيط قياسي في Tkinter. `pack()`, `grid()`, و `place()` هم مدراء التخطيط.' },
      { id: 'adv_gui_4', text: 'ما هي الدالة التي يجب استدعاؤها على النافذة الرئيسية لبدء حلقة الأحداث (Event Loop) وجعل الواجهة تفاعلية؟', options: ['`root.start()`', '`root.run_events()`', '`root.mainloop()`', '`root.listen()`'], correctAnswerIndex: 2, explanation: '`root.mainloop()` تبدأ حلقة الأحداث الرئيسية لـ Tkinter.' },
      { id: 'adv_gui_5', text: 'في Tkinter، إذا أردت ربط قيمة مربع إدخال نص (`Entry` widget) بمتغير في كود بايثون لتسهيل الحصول على النص وتحديثه، أي نوع من المتغيرات الخاصة بـ Tkinter ستستخدم؟', options: ['`tk.TextVariable()`', '`tk.StringData()`', '`tk.StringVar()`', '`tk.InputVar()`'], correctAnswerIndex: 2, explanation: '`tk.StringVar()` (وكذلك `IntVar`, `DoubleVar`, `BooleanVar`) تستخدم كمتغيرات تحكم للـ widgets.' }
    ]
  }
];
