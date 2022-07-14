---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /thimo-pedersen-nC_dpX5Q_bA-unsplash.jpg
# apply any windi css classes to the current slide
class: "text-center"
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
css: unocss
---

# 浅谈团队研发流程

<!-- <div class="pt-20"> -->
  <!-- <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
     yuwangi 
  </span> -->
<!-- </div> -->

<!-- <div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div> -->

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

### 流程图

<div class="pt-20">
  <img
    class="absolute top-22 left-1/2 w-160 -mx-80"
    src="/fwfwfwfwfg.png"
  >
  <div v-click class="absolute top-22 left-1/2 w-160 z-20"> 
    <img  class=" -mx-80"
    src="/006r3PQBly1fowwuf603cg306o07c0t4.jpg">
  </div>
</div>
---
class: 'flex text-center align-self-center justify-self-center'
---

<div class="absolute top-1/2 left-1/2 w-120 h-30 -mx-60 -my-15">
  <div class="">
    <p>
      但是事实总是事与愿违，往往我们面临的都是多项目同时开发，
    </p>
    <p>
     那么多项目同时进行如何做好进度管理？
    </p>
  </div>
</div>

<style>
h3,p {
  color:#fff;
}
.slidev-layout{
  background:#000;
}
/* .slidev-page-3{
  background:rgba(0,0,0,0.1);
} */
</style>

---

多项目管理的十大关键点：

- 📝 明确且达成共识的项目目标
- 🎨 制定项目标准及流程
- 🎡 合理的优先级排序
- 🤹 有能力保障且有能力执行的资源分配
- 💻 精细化的任务分解，任务责任到人
- 🩺 每周检查项目进展
- ⚔️ 根据检查情况调整任务目标、资源、进度，并修改计划
- 📞 有效沟通
- 💵 激励
- 🔨 工具化

---

## 📝 明确且达成共识的项目目标

<br/>

产品需求要讲述业务方提出需求的原因、需求背景、以及如何解决业务痛点

<div v-motion-roll-bottom>
确保每个人都知道自己努力的方向是什么，确保每个工作项都是为实现这个目标在做贡献。如果连目标都不明确，那么整个团队也只是在低着头做事，完全谈不上主观能动性和积极性。
</div>
---

# 🎨 制定项目标准及流程

多项目往往也意味着多团队、跨团队，而标准化、流程化能够尽可能的让不同的团队按照统一的规则和标准做事，也能给团队减少冲突，极大实现企业员工之间的默契。

就比如，用户端反馈的一个小需求，如何在不同的团队之间传递，并最终被产品采纳,然后上线到新的功能中，这个小小的事情就是一个公司内部运营的小流程。而这个小小的流程标准化和非标准化所带来的差异是巨大的。

---

# 🎡 合理的优先级排序

优先级排序能够有利于资源的合理分配，将更多的注意力集中在重要和紧急的项目上，这是大家都知道的事。

---

---

# 🤹 有能力保障且有能力执行的资源分配

并不是所有资源都能得到有效的投入，这是项目风险的一个重要原因。

除此之外，一个公司资源是有限的（包括人力/财力/硬件设备等），同一资源不可能同时供所有的项目使用。

多项目并行时，在资源充沛的情况下一般是几个项目内部互相调用，特殊资源找公司协调；在资源紧张时，应先建立多项目进度计划梳理与内外部资源情况分析，再根据每个项目不同的阶段及情况，匹配人力资源模型。

---

# 💻 精细化的任务分解，任务责任到人

为了方便评估风险，最大限度减少不可控因素，需要对项目进行逐级拆解，要将所有任务分解到不能再分，让每个任务的粒度足够小，然后再根据任务优先级进行排期。

任务责任到人

在进行一些重大项目时，我们有时用 Worktile 将每个项目中的工作逐层分解，从项目目标（可能是关键结果）开始由上至下逐级拆解，直至每项工作都能估算工期和成本，然后为任务设置唯一负责人（之所以强调唯一是为了防止个别员工消极怠工）。

规定截止时间

在项目推进过程中，我们一般情况下只会规定整个项目的完成时间，或者最多规定几个里程碑式的关键节点，只是项目执行过程错综复杂。

所以，为了最大限度规避项目延期风险，在执行过程中，为每项任务设定确定的截止时间，这样，一方面可以随时了解项目进度，评估项目风险；

另一方面，对于一些无法确定完成时间的任务可以重点关注推进，集中精力解决不可控的任务，避免项目延期。

---

# 🩺 每周检查项目进展

---

# ⚔️ 根据检查情况调整任务目标、资源、进度，并修改计划

---

# 📞 有效沟通

---

# 💵 激励

---

# 🔨 工具化

---

## preload: false

# Animations

Animations are powered by [@vueuse/motion](https://motion.vueuse.org/).

```html
<div v-motion :initial="{ x: -80 }" :enter="{ x: 0 }">Slidev</div>
```

<div class="w-60 relative mt-6">
  <div class="relative w-40 h-40">
    <img
      v-motion
      :initial="{ x: 800, y: -100, scale: 1.5, rotate: -50 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-square.png"
    />
    <img
      v-motion
      :initial="{ y: 500, x: -100, scale: 2 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-circle.png"
    />
    <img
      v-motion
      :initial="{ x: 600, y: 400, scale: 2, rotate: 100 }"
      :enter="final"
      class="absolute top-0 left-0 right-0 bottom-0"
      src="https://sli.dev/logo-triangle.png"
    />
  </div>

  <div
    class="text-5xl absolute top-14 left-40 text-[#2B90B6] -z-1"
    v-motion
    :initial="{ x: -80, opacity: 0}"
    :enter="{ x: 0, opacity: 1, transition: { delay: 2000, duration: 1000 } }">
    Slidev
  </div>
</div>

<!-- vue script setup scripts can be directly used in markdown, and will only affects current page -->
<script setup lang="ts">
const final = {
  x: 0,
  y: 0,
  rotate: 0,
  scale: 1,
  transition: {
    type: 'spring',
    damping: 10,
    stiffness: 20,
    mass: 2
  }
}
</script>

<div
  v-motion
  :initial="{ x:35, y: 40, opacity: 0}"
  :enter="{ y: 0, opacity: 1, transition: { delay: 3500 } }">

[Learn More](https://sli.dev/guide/animations.html#motion)

</div>

---

# LaTeX

LaTeX is supported out-of-box powered by [KaTeX](https://katex.org/).

<br>

Inline $\sqrt{3x-1}+(1+x)^2$

Block

$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$

<br>

[Learn more](https://sli.dev/guide/syntax#latex)

---

layout: center
class: text-center

---

# Learn More

[Documentations](https://sli.dev) · [GitHub](https://github.com/slidevjs/slidev) · [Showcases](https://sli.dev/showcases.html)
