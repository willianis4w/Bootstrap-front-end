Bootstrap front-end using ITCSS & BEM
===================

This structure is based on ITCSS & BEM Methodology.

[What is ITCSS?](https://speakerdeck.com/dafed/managing-css-projects-with-itcss)

[What is BEM Methodology?](https://en.bem.info/)

[And take a look at this post about scalable CSS](http://www.gpmd.co.uk/blog/scalable-css/)


---

### ITCSS

![ITCSS](https://hackpad-attachments.s3.amazonaws.com/hackpad.com_PIPWVUMv6rB_p.296099_1420807134466_itcss.jpg)

**Settings**: Global variables config switches (colours, screen sizes)

**Tools**: Functions and mixins

**Generic**: Ground-zero styles (normalize/reset.css, box-sizing)

**Base**: Unclassed HTML elements (type selectors)

**Objects**: OOCSS - Unstyled design patterns (media object) *e.g. ui-list {}*

**Components**: Styled objects, chunks of UI - *e.g. products-list {}*

**Theme (optional)**: Themed components, used for multiple sites with the same layout and components. Can be utilised for multi-site Magento setups.

**Trumps**: Helpers and overrides, *e.g. .float-left { float:left !important;}*


---

### BEM


	.person {}
	.person__hand {}
	.person--female__hand

	<div class="person person--female">
		<div class="person__hand"></div>
	</div>

---

### Server side


This bootstrap is using PHP, but you can change it easily.

---

[Willian Costa Souza](http://williancs.com/)