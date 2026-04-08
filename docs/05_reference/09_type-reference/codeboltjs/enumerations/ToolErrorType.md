---
title: ToolErrorType
---

[**@codebolt/codeboltjs**](../index.md)

***

# Enumeration: ToolErrorType

Defined in: packages/codeboltjs/src/tools/types.ts:80

Error types for tool operations

## Enumeration Members

| Enumeration Member | Value | Defined in |
| ------ | ------ | ------ |
| <a id="agent_not_found"></a> `AGENT_NOT_FOUND` | `"agent_not_found"` | packages/codeboltjs/src/tools/types.ts:134 |
| <a id="attempt_to_create_existing_file"></a> `ATTEMPT_TO_CREATE_EXISTING_FILE` | `"attempt_to_create_existing_file"` | packages/codeboltjs/src/tools/types.ts:92 |
| <a id="browser_execution_error"></a> `BROWSER_EXECUTION_ERROR` | `"browser_execution_error"` | packages/codeboltjs/src/tools/types.ts:127 |
| <a id="command_timeout"></a> `COMMAND_TIMEOUT` | `"command_timeout"` | packages/codeboltjs/src/tools/types.ts:131 |
| <a id="discovered_tool_execution_error"></a> `DISCOVERED_TOOL_EXECUTION_ERROR` | `"discovered_tool_execution_error"` | packages/codeboltjs/src/tools/types.ts:117 |
| <a id="edit_expected_occurrence_mismatch"></a> `EDIT_EXPECTED_OCCURRENCE_MISMATCH` | `"edit_expected_occurrence_mismatch"` | packages/codeboltjs/src/tools/types.ts:105 |
| <a id="edit_no_change"></a> `EDIT_NO_CHANGE` | `"edit_no_change"` | packages/codeboltjs/src/tools/types.ts:106 |
| <a id="edit_no_change_llm_judgement"></a> `EDIT_NO_CHANGE_LLM_JUDGEMENT` | `"edit_no_change_llm_judgement"` | packages/codeboltjs/src/tools/types.ts:102 |
| <a id="edit_no_occurrence_found"></a> `EDIT_NO_OCCURRENCE_FOUND` | `"edit_no_occurrence_found"` | packages/codeboltjs/src/tools/types.ts:104 |
| <a id="edit_preparation_failure"></a> `EDIT_PREPARATION_FAILURE` | `"edit_preparation_failure"` | packages/codeboltjs/src/tools/types.ts:103 |
| <a id="execution_failed"></a> `EXECUTION_FAILED` | `"execution_failed"` | packages/codeboltjs/src/tools/types.ts:86 |
| <a id="file_not_found"></a> `FILE_NOT_FOUND` | `"file_not_found"` | packages/codeboltjs/src/tools/types.ts:89 |
| <a id="file_too_large"></a> `FILE_TOO_LARGE` | `"file_too_large"` | packages/codeboltjs/src/tools/types.ts:93 |
| <a id="file_write_failure"></a> `FILE_WRITE_FAILURE` | `"file_write_failure"` | packages/codeboltjs/src/tools/types.ts:90 |
| <a id="git_execution_error"></a> `GIT_EXECUTION_ERROR` | `"git_execution_error"` | packages/codeboltjs/src/tools/types.ts:124 |
| <a id="glob_execution_error"></a> `GLOB_EXECUTION_ERROR` | `"glob_execution_error"` | packages/codeboltjs/src/tools/types.ts:109 |
| <a id="grep_execution_error"></a> `GREP_EXECUTION_ERROR` | `"grep_execution_error"` | packages/codeboltjs/src/tools/types.ts:110 |
| <a id="invalid_tool_params"></a> `INVALID_TOOL_PARAMS` | `"invalid_tool_params"` | packages/codeboltjs/src/tools/types.ts:82 |
| <a id="ls_execution_error"></a> `LS_EXECUTION_ERROR` | `"ls_execution_error"` | packages/codeboltjs/src/tools/types.ts:111 |
| <a id="mcp_tool_error"></a> `MCP_TOOL_ERROR` | `"mcp_tool_error"` | packages/codeboltjs/src/tools/types.ts:113 |
| <a id="memory_tool_execution_error"></a> `MEMORY_TOOL_EXECUTION_ERROR` | `"memory_tool_execution_error"` | packages/codeboltjs/src/tools/types.ts:114 |
| <a id="no_space_left"></a> `NO_SPACE_LEFT` | `"no_space_left"` | packages/codeboltjs/src/tools/types.ts:95 |
| <a id="path_is_not_a_directory"></a> `PATH_IS_NOT_A_DIRECTORY` | `"path_is_not_a_directory"` | packages/codeboltjs/src/tools/types.ts:112 |
| <a id="path_not_in_workspace"></a> `PATH_NOT_IN_WORKSPACE` | `"path_not_in_workspace"` | packages/codeboltjs/src/tools/types.ts:97 |
| <a id="permission_denied"></a> `PERMISSION_DENIED` | `"permission_denied"` | packages/codeboltjs/src/tools/types.ts:94 |
| <a id="read_content_failure"></a> `READ_CONTENT_FAILURE` | `"read_content_failure"` | packages/codeboltjs/src/tools/types.ts:91 |
| <a id="read_many_files_search_error"></a> `READ_MANY_FILES_SEARCH_ERROR` | `"read_many_files_search_error"` | packages/codeboltjs/src/tools/types.ts:115 |
| <a id="search_path_not_a_directory"></a> `SEARCH_PATH_NOT_A_DIRECTORY` | `"search_path_not_a_directory"` | packages/codeboltjs/src/tools/types.ts:99 |
| <a id="search_path_not_found"></a> `SEARCH_PATH_NOT_FOUND` | `"search_path_not_found"` | packages/codeboltjs/src/tools/types.ts:98 |
| <a id="shell_execute_error"></a> `SHELL_EXECUTE_ERROR` | `"shell_execute_error"` | packages/codeboltjs/src/tools/types.ts:116 |
| <a id="target_is_directory"></a> `TARGET_IS_DIRECTORY` | `"target_is_directory"` | packages/codeboltjs/src/tools/types.ts:96 |
| <a id="task_not_found"></a> `TASK_NOT_FOUND` | `"task_not_found"` | packages/codeboltjs/src/tools/types.ts:136 |
| <a id="terminal_execution_error"></a> `TERMINAL_EXECUTION_ERROR` | `"terminal_execution_error"` | packages/codeboltjs/src/tools/types.ts:130 |
| <a id="thread_not_found"></a> `THREAD_NOT_FOUND` | `"thread_not_found"` | packages/codeboltjs/src/tools/types.ts:135 |
| <a id="tool_not_registered"></a> `TOOL_NOT_REGISTERED` | `"tool_not_registered"` | packages/codeboltjs/src/tools/types.ts:85 |
| <a id="unhandled_exception"></a> `UNHANDLED_EXCEPTION` | `"unhandled_exception"` | packages/codeboltjs/src/tools/types.ts:84 |
| <a id="unknown"></a> `UNKNOWN` | `"unknown"` | packages/codeboltjs/src/tools/types.ts:83 |
| <a id="web_fetch_fallback_failed"></a> `WEB_FETCH_FALLBACK_FAILED` | `"web_fetch_fallback_failed"` | packages/codeboltjs/src/tools/types.ts:119 |
| <a id="web_fetch_no_url_in_prompt"></a> `WEB_FETCH_NO_URL_IN_PROMPT` | `"web_fetch_no_url_in_prompt"` | packages/codeboltjs/src/tools/types.ts:118 |
| <a id="web_fetch_processing_error"></a> `WEB_FETCH_PROCESSING_ERROR` | `"web_fetch_processing_error"` | packages/codeboltjs/src/tools/types.ts:120 |
| <a id="web_search_failed"></a> `WEB_SEARCH_FAILED` | `"web_search_failed"` | packages/codeboltjs/src/tools/types.ts:121 |
