"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95126],{95126:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});let i=Object.freeze({information_for_contributors:["This file has been converted from https://github.com/jlelong/vscode-latex-basics/blob/master/syntaxes/Bibtex.tmLanguage.json","If you want to provide a fix or improvement, please create a pull request against the original repository.","Once accepted there, we are happy to receive an update request."],version:"https://github.com/jlelong/vscode-latex-basics/commit/36411b38cf4ed18e02050249e2162b1316488686",name:"bibtex",scopeName:"text.bibtex",comment:"Grammar based on description from https://github.com/aclements/biblib\n",patterns:[{match:"@(?i:comment)(?=[\\s{(])",captures:{0:{name:"punctuation.definition.comment.bibtex"}},name:"comment.block.at-sign.bibtex"},{begin:"((@)(?i:preamble))\\s*(\\{)\\s*",beginCaptures:{1:{name:"keyword.other.preamble.bibtex"},2:{name:"punctuation.definition.keyword.bibtex"},3:{name:"punctuation.section.preamble.begin.bibtex"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.preamble.end.bibtex"}},name:"meta.preamble.braces.bibtex",patterns:[{include:"#field_value"}]},{begin:"((@)(?i:preamble))\\s*(\\()\\s*",beginCaptures:{1:{name:"keyword.other.preamble.bibtex"},2:{name:"punctuation.definition.keyword.bibtex"},3:{name:"punctuation.section.preamble.begin.bibtex"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.preamble.end.bibtex"}},name:"meta.preamble.parenthesis.bibtex",patterns:[{include:"#field_value"}]},{begin:"((@)(?i:string))\\s*(\\{)\\s*([a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*)",beginCaptures:{1:{name:"keyword.other.string-constant.bibtex"},2:{name:"punctuation.definition.keyword.bibtex"},3:{name:"punctuation.section.string-constant.begin.bibtex"},4:{name:"variable.other.bibtex"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.string-constant.end.bibtex"}},name:"meta.string-constant.braces.bibtex",patterns:[{include:"#field_value"}]},{begin:"((@)(?i:string))\\s*(\\()\\s*([a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*)",beginCaptures:{1:{name:"keyword.other.string-constant.bibtex"},2:{name:"punctuation.definition.keyword.bibtex"},3:{name:"punctuation.section.string-constant.begin.bibtex"},4:{name:"variable.other.bibtex"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.string-constant.end.bibtex"}},name:"meta.string-constant.parenthesis.bibtex",patterns:[{include:"#field_value"}]},{begin:"((@)[a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*)\\s*(\\{)\\s*([^\\s,}]*)",beginCaptures:{1:{name:"keyword.other.entry-type.bibtex"},2:{name:"punctuation.definition.keyword.bibtex"},3:{name:"punctuation.section.entry.begin.bibtex"},4:{name:"entity.name.type.entry-key.bibtex"}},end:"\\}",endCaptures:{0:{name:"punctuation.section.entry.end.bibtex"}},name:"meta.entry.braces.bibtex",patterns:[{begin:"([a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*)\\s*(\\=)",beginCaptures:{1:{name:"support.function.key.bibtex"},2:{name:"punctuation.separator.key-value.bibtex"}},end:"(?=[,}])",name:"meta.key-assignment.bibtex",patterns:[{include:"#field_value"}]}]},{begin:"((@)[a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*)\\s*(\\()\\s*([^\\s,]*)",beginCaptures:{1:{name:"keyword.other.entry-type.bibtex"},2:{name:"punctuation.definition.keyword.bibtex"},3:{name:"punctuation.section.entry.begin.bibtex"},4:{name:"entity.name.type.entry-key.bibtex"}},end:"\\)",endCaptures:{0:{name:"punctuation.section.entry.end.bibtex"}},name:"meta.entry.parenthesis.bibtex",patterns:[{begin:"([a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*)\\s*(\\=)",beginCaptures:{1:{name:"support.function.key.bibtex"},2:{name:"punctuation.separator.key-value.bibtex"}},end:"(?=[,)])",name:"meta.key-assignment.bibtex",patterns:[{include:"#field_value"}]}]},{begin:"[^@\\n]",end:"(?=@)",name:"comment.block.bibtex"}],repository:{field_value:{patterns:[{include:"#string_content"},{include:"#integer"},{include:"#string_var"},{name:"keyword.operator.bibtex",match:"#"}]},integer:{match:"\\s*(\\d+)\\s*",captures:{1:{name:"constant.numeric.bibtex"}}},nested_braces:{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.group.begin.bibtex"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.group.end.bibtex"}},patterns:[{include:"#nested_braces"}]},string_var:{match:"[a-zA-Z!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~][a-zA-Z0-9!$&*+\\-./:;<>?@\\[\\\\\\]^_`|~]*",captures:{0:{name:"support.variable.bibtex"}}},string_content:{patterns:[{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.string.begin.bibtex"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.string.end.bibtex"}},patterns:[{include:"#nested_braces"}]},{begin:'"',beginCaptures:{0:{name:"punctuation.definition.string.begin.bibtex"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.bibtex"}},patterns:[{include:"#nested_braces"}]}]}},displayName:"BibTeX"});var a=[i]}}]);