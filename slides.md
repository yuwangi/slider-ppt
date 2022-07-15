---
# try also 'default' to start simple
theme: seriph
title: "浅谈团队研发流程管理"
titleTemplate: "%s"
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

# 浅谈团队研发流程管理

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

</style>

---

多项目管理的关键点：

- 📝 明确且达成共识的项目目标
- 🎡 合理的优先级排序
- 🤹 有能力保障且有能力执行的资源分配
- 💻 精细化的任务分解，严守deadline
- 🩺 每周检查项目进展
- ⚔️ 根据检查情况调整任务目标、资源、进度，并修改计划
- 📞 有效沟通
- 💵 激励
- 🔨 工具化

---
layout: image-right
image: https://images.unsplash.com/photo-1530819568329-97653eafbbfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2092&q=80
---

### 📝 明确且达成共识的项目目标

<br/>
  产品需求要讲述业务方诉求、提出需求的原因、需求背景、以及如何解决业务痛点（防止改需求，返工）
  <br/>
  <br/>
<div v-click  class="absolute top-22 left-1/2 w-160 z-20">
  <img  
    src="/1496775-20210406091200490-2126251684.jpg">
</div>
<div >
开发要充分了解产品需求是什么，确保需求吃透，提出见解思路，商讨出最优的方案。
</div>
<br/>
<div>
如果连需求主要解决什么都不明确，那么整个团队也只是在低着头做事，只是机械性完成任务，写出来的代码bug也会更多
</div>
---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080?1
---

### 🎡 合理的优先级排序

<br/>
优先级排序能够有利于资源的合理分配，将更多的注意力集中在重要和紧急的项目上，这是大家都知道的事。
<br/>
<br/>
需求优先级要落实到每个需求上，优先开发优先级高的任务，即便有上线风险，也整体可控。
<br/>
<br/>
多项目并行时，也要区分项目的优先级，分清主次，优先保证

---

### 🤹 有能力保障且有能力执行的资源分配

<br/>
并不是所有资源都能得到有效的投入，这是项目风险的一个重要原因。
<br/>
<br/>
多项目并行时，往往需要其他团队的支持（任务没有分解清楚，没有提前告知其他团队支持时间），但其他团队也会有相应的开发任务，需要先梳理其他团队进度（人员资源释放情况）。
<br/>
<br/>
情况梳理：
<br/>

- 满足临时团队支持，对接需求，开发
- 不满足但是可以临时抽调部分人手，工期基本能满足（ok、加班干，没有分解清楚任务的请吃饭）
- 不满足且其他团队也没有时间开发的，需要跟上级领导汇报，列出风险时间，领导决定优先开发哪个

---

### 💻 精细化的任务分解，严守deadline
<br/>

- 分解任务

为了方便评估风险，最大限度减少不可控因素，需要对项目进行逐级拆解，要将所有任务分解到不能再分，让每个任务的粒度足够小，然后再根据任务优先级进行排期。

- 规定截止时间（deadline）

在项目推进过程中，我们一般情况下只会规定整个项目的完成时间，或者最多规定几个里程碑式的关键节点（开发时间，联调时间，测试时间，上线时间），只是项目执行过程错综复杂。

所以，为了最大限度规避项目延期风险，在执行过程中，为每项任务设定确定的截止时间，这样，一方面可以随时了解项目进度，评估项目风险；

另一方面，对于一些无法确定完成时间的任务可以重点关注推进，集中精力解决不可控的任务，避免项目延期。

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080?5
---

### 🩺 每周检查项目进展
<br/>
<br/>

- 每周汇报工作进度（进度较慢，则汇报影响进度原因，如：需求难度大、其他工作影响等）

- 工作中遇到问题（拿捏不清楚的解决思路），及时解决问题。

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080?6
---

### ⚔️ 根据检查情况调整任务目标、资源、进度，并修改计划

如题 👆

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080?7
---

### 📞 及时有效沟通

<br/>
遇到问题及时反映，跟产品过解决方案，解决方案落于纸面（不要口口相传）

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080?8
---

### 💵 激励

又要马儿跑又要马儿不吃草”这句话放在某些领导或者企业管理者身上很适合，当然，大多数老板肯定都想以最低的成本获得最大的收益，只是，低成本也是要有限度的，对于员工来说，适当的激励的非常必要的。

尤其是与目标相关的激励机制，如果只有目标没有激励，那么目标的完成与否或者目标完成质量好坏都与员工没有关系，多数员工只关心与自己利益相关的工作或任务的完成情况，因此，针对目标的激励至关重要。

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080?9
---

### 🔨 工具化

工作流程统一管理

- 能进行精细化任务分解，责任到人
- 能随时查看目标、项目的进度情况
- 能对资源情况进行管理

PS:要是能换掉禅道就好了

tapd 直接跟企业微信打通的，每个需求的建立，指派，更改，延期风险提示，或者bug都会微信推送等等，都可以及时有效跟踪，完全线上化处理。


---
class: 'flex text-center align-self-center justify-self-center'
---

<div class="absolute top-1/2 left-1/2 w-120 h-30 -mx-60 -my-15">
  <div class="">
    <p v-click-hide>
      上述就是项目流程管理的一些分享
    </p>
     <div v-click class="container" > 
       好了，下面开始跑题
  </div>
  </div>
</div>

<style>
h3,p {
  color:#fff;
}
.slidev-layout{
  background:#000;
}
.container{
  text-align:center;
  margin:0 auto;
  color:#fff;
}

</style>

---
class: 'flex text-center align-self-center justify-self-center'
---

<div class="absolute top-1/2 left-1/2 w-120 h-30 -mx-60 -my-15">
  <div class="">
    <p>
      团队技术知识库管理
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

</style>

---

### 主要分为以下几个部分：

<br/>
<br/>

- 📚 研发手册
- 🔮 团队博客
- ⚙️ 组件研发
- 👶🏻 招聘相关
- 👬🏻 团队相关

---

### 📒 研发手册

研发手册要包含：

- Git
- 编码规范
- 技术栈整理
- 及一些其他基础

---

### 🔮 团队博客

定期分享，分享主体不限，团队博客建立，每个人的分享都落在博客上，做到知识汇总。也能促进员工成长。

---

### ⚙️ 组件研发

组件研发文档

各团队分享出自己做出的一些组件，或者公共类等文档描述，其他团队也能复用，沉淀。

---

### 👶🏻 招聘相关

招聘资料整理：

- 岗位JD
- 面试指南
- 新员工入职员工（例如: 资料准备、代码规范等等）

---

### 👬🏻 团队相关

团队相关文档：

- 团队协作
- 读书
- 写作
- 内容分享


---
class: 'flex text-center align-self-center justify-self-center'
---

<div class="absolute top-1/2 left-1/2 w-120 h-30 -mx-60 -my-15">
  <div class="">
    <p >
     To  be  continue ...
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

</style>

---
class: 'flex text-center align-self-center justify-self-center'
---

<div class="absolute top-1/2 left-1/2 w-120 h-30 -mx-60 -my-15">
  <div class="">
    <p >
     桥豆麻袋...
    </p>
    <p v-click>
     你不会以为这就完了吧
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

</style>

---
class: 'flex text-center align-self-center justify-self-center'
---

<div class="absolute top-1/2 left-1/2 w-120 h-30 -mx-60 -my-15">
  <div class="">
    <p >
     下面一些我的碎碎念
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

</style>
---
class: 'flex text-center align-self-center justify-self-center'
---

<div class="absolute top-1/2 left-1/2 w-120 h-30 -mx-60 -my-15">
  <div class="">
    <p >
    其实我们一直以来做的就是数字化供应链平台，但是我觉得现在还缺少一些智能化的东西
     <!-- 前几天跟商总闲聊，无意中聊到  供应链上线到现在，感觉没有太多拿得出手的、让业务部门满意的东西 -->
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

</style>
---

### 下边是我整理的一些小想法

如下：

<v-clicks>

- 各流程报错提示、细分、整理
- 列举之前的例子
- 比如说我们之前一直说的钉钉流程打通
- 每日钉钉提醒 订单来了 钉钉提醒、供应商合同到期 提醒、报错提醒（下一步解决人）、货单上架商品 紧急加工处理 
- 数据化方面
- 店铺各种信息资料大屏 店铺商品上架情况 每日销售情况
- 供应商 商品价格波动情况、履约状况、供应商环比数据分析  销量 履约情况商品量 库存量  时效
- 选品策略 ?
- 各分销平台销量情况
- 对接供应商的 纵览图（上下游）
- App销量榜单 商品访问热度

</v-clicks>