name: 加入新群/频道
description: 让机器人加入一个新群/频道。
title: "[NEW]: 加入新群"
labels: ["new"]
assignees:

- Teahouse-Studios/akaribot-admin
  body:
- type: markdown
  attributes:
  value: |
  感谢您使用Kotori。由于近期腾讯加大了对第三方机器人的打击力度，鉴于当前局势的不确定性，我们暂时不再接受新的群组申请。
- type: textarea
  id: other
  attributes:
  label: 这是一个占位符
  description: 占位符占位符占位符占位符
  placeholder: 占位符占位符占位符占位符占位符占位符
  validations:
  required: false

# - type: markdown

# attributes:

# value: |

#

# 另请注意，我们可能会要求您提交更多信息。因此，请关注您的 GitHub 绑定邮箱通知。若您未在 24 小时内回复我们的要求，我们将关闭您的申请，不过您还可以再次提交。

# - type: checkboxes

# id: preflight

# attributes:

# label: 开始之前……

# description: 让我们看看你的登机牌准备好了吗

# options:

# - label: 我已阅读并同意

# required: true

# - label: 我是群组的管理员，或群主或管理员允许机器人入群

# required: true

# - type: markdown

# attributes:

# value: |

# 我们知道您不想阅读冗长的服务条款，但仍请您特别注意：

# - 您不得在使用本服务时利用提供的功能或漏洞，直接或间接地诱导Kotori发送违反法律法规、欺诈、虚假或产生误导的信息。

# - 无论Kotori是否处于运行状态，都不得对Kotori进行言论攻击、滥用服务以及无故禁言、踢出等不友善行为。

# - 我们会根据实际情况自行裁定不友善行为，并不限于此处列出的类型。

# - 不得利用漏洞或使用相关工具对服务器进行攻击，如发现应及时向我们报告。

# - 您不得规避本服务的任何访问或可用性限制。不得侵犯他人的权利。

# - 您不得帮助他人违反这些规则。

# 对于任何违反上述协议、或是由我们判定为出现其它不合适的行为，我们将视情况终止对您的服务，并有权利公开相关的不良行为。

# 请注意：上述提示不能视为对服务条款的替代。

# - type: dropdown

# id: group-type

# attributes:

# label: QQ群组类型

# description: 你要申请加入什么样的QQ群组？是老掉牙的群还是最新潮流的QQ频道（beta）？

# options:

# - QQ群

# - QQ频道（beta）

# validations:

# required: true

# - type: input

# id: qq-id

# attributes:

# label: QQ号

# description: 您的QQ号。

# placeholder: e.g. 10000

# validations:

# required: true

# - type: input

# id: group-id

# attributes:

# label: QQ群

# description: 您想要让机器人加入的群的群号，如您要申请的是频道，请将通行证链接发送到此处即可。

# placeholder: e.g. 1000000

# validations:

# required: true

# - type: textarea

# id: group-key

# attributes:

# label: 入群方式

# description: 群组是否有特殊的入群答案？是否只支持二维码加群？请将它们备注至此。注：您的入群答案或二维码将在申请完成后被删除。请放心填写。

# value: 本群无特殊入群答案，支持搜索群号加群，无需二维码或入群链接。

# validations:

# required: true

# - type: textarea

# id: admin-consent

# attributes:

# label: 群主或管理员同意

# description: 若您不是群组的群主/管理员，请附一张群主/管理员允许机器人入群的截图。

# value: 我是本群的群主或管理员。

# validations:

# required: true

# - type: textarea

# id: other

# attributes:

# label: 备注

# description: 您还想告诉我们什么？

# placeholder: 什么都可以哦，没有就算了吧。

# validations:

# required: false