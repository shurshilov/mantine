"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76968,24380],{24380:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});let i=Object.freeze({information_for_contributors:["This file has been converted from https://github.com/textmate/diff.tmbundle/blob/master/Syntaxes/Diff.plist","If you want to provide a fix or improvement, please create a pull request against the original repository.","Once accepted there, we are happy to receive an update request."],version:"https://github.com/textmate/diff.tmbundle/commit/0593bb775eab1824af97ef2172fd38822abd97d7",name:"diff",scopeName:"source.diff",patterns:[{captures:{1:{name:"punctuation.definition.separator.diff"}},match:"^((\\*{15})|(={67})|(-{3}))$\\n?",name:"meta.separator.diff"},{match:"^\\d+(,\\d+)*(a|d|c)\\d+(,\\d+)*$\\n?",name:"meta.diff.range.normal"},{captures:{1:{name:"punctuation.definition.range.diff"},2:{name:"meta.toc-list.line-number.diff"},3:{name:"punctuation.definition.range.diff"}},match:"^(@@)\\s*(.+?)\\s*(@@)($\\n?)?",name:"meta.diff.range.unified"},{captures:{3:{name:"punctuation.definition.range.diff"},4:{name:"punctuation.definition.range.diff"},6:{name:"punctuation.definition.range.diff"},7:{name:"punctuation.definition.range.diff"}},match:"^(((\\-{3}) .+ (\\-{4}))|((\\*{3}) .+ (\\*{4})))$\\n?",name:"meta.diff.range.context"},{match:"^diff --git a/.*$\\n?",name:"meta.diff.header.git"},{match:"^diff (-|\\S+\\s+\\S+).*$\\n?",name:"meta.diff.header.command"},{captures:{4:{name:"punctuation.definition.from-file.diff"},6:{name:"punctuation.definition.from-file.diff"},7:{name:"punctuation.definition.from-file.diff"}},match:"(^(((-{3}) .+)|((\\*{3}) .+))$\\n?|^(={4}) .+(?= - ))",name:"meta.diff.header.from-file"},{captures:{2:{name:"punctuation.definition.to-file.diff"},3:{name:"punctuation.definition.to-file.diff"},4:{name:"punctuation.definition.to-file.diff"}},match:"(^(\\+{3}) .+$\\n?| (-) .* (={4})$\\n?)",name:"meta.diff.header.to-file"},{captures:{3:{name:"punctuation.definition.inserted.diff"},6:{name:"punctuation.definition.inserted.diff"}},match:"^(((>)( .*)?)|((\\+).*))$\\n?",name:"markup.inserted.diff"},{captures:{1:{name:"punctuation.definition.changed.diff"}},match:"^(!).*$\\n?",name:"markup.changed.diff"},{captures:{3:{name:"punctuation.definition.deleted.diff"},6:{name:"punctuation.definition.deleted.diff"}},match:"^(((<)( .*)?)|((-).*))$\\n?",name:"markup.deleted.diff"},{begin:"^(#)",captures:{1:{name:"punctuation.definition.comment.diff"}},comment:'Git produces unified diffs with embedded comments"',end:"\\n",name:"comment.line.number-sign.diff"},{match:"^index [0-9a-f]{7,40}\\.\\.[0-9a-f]{7,40}.*$\\n?",name:"meta.diff.index.git"},{captures:{1:{name:"punctuation.separator.key-value.diff"},2:{name:"meta.toc-list.file-name.diff"}},match:"^Index(:) (.+)$\\n?",name:"meta.diff.index"},{match:"^Only in .*: .*$\\n?",name:"meta.diff.only-in"}],displayName:"Diff"});var a=[i]},76968:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var i=n(24380);let a=Object.freeze({information_for_contributors:["This file has been converted from https://github.com/walles/git-commit-message-plus/blob/master/syntaxes/git-commit.tmLanguage.json","If you want to provide a fix or improvement, please create a pull request against the original repository.","Once accepted there, we are happy to receive an update request."],version:"https://github.com/walles/git-commit-message-plus/commit/35a079dea5a91b087021b40c01a6bb4eb0337a87",name:"git-commit",scopeName:"text.git-commit",patterns:[{comment:"diff presented at the end of the commit message when using commit -v.",name:"meta.embedded.diff.git-commit",contentName:"source.diff",begin:"(?=^diff\\ \\-\\-git)",end:"\\z",patterns:[{include:"source.diff"}]},{comment:"User supplied message",name:"meta.scope.message.git-commit",begin:"^(?!#)",end:"^(?=#)",patterns:[{comment:"Mark > 50 lines as deprecated, > 72 as illegal",name:"meta.scope.subject.git-commit",match:"\\G.{0,50}(.{0,22}(.*))$",captures:{1:{name:"invalid.deprecated.line-too-long.git-commit"},2:{name:"invalid.illegal.line-too-long.git-commit"}}}]},{comment:"Git supplied metadata in a number of lines starting with #",name:"meta.scope.metadata.git-commit",begin:"^(?=#)",contentName:"comment.line.number-sign.git-commit",end:"^(?!#)",patterns:[{match:"^#\\t((modified|renamed):.*)$",captures:{1:{name:"markup.changed.git-commit"}}},{match:"^#\\t(new file:.*)$",captures:{1:{name:"markup.inserted.git-commit"}}},{match:"^#\\t(deleted.*)$",captures:{1:{name:"markup.deleted.git-commit"}}},{comment:"Fallback for non-English git commit template",match:"^#\\t([^:]+): *(.*)$",captures:{1:{name:"keyword.other.file-type.git-commit"},2:{name:"string.unquoted.filename.git-commit"}}}]}],displayName:"Git Commit Message",embeddedLangs:["diff"]});var m=[...i.default,a]}}]);