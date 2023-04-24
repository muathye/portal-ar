---
layout: doc
title: Add SSH to Bitbucket for Windows
description: Add SSH to Bitbucket for Windows
---

# Add SSH to Bitbucket for Windows

If you have an account on [bitbucket.org](https://bitbucket.org), this article may help you

### Ensure `ssh` is installed on your Windows by opening Powershell

Use the ```Get-Command ssh``` command to check the path of ssh


```bat
$ Get-Command ssh

CommandType     Name        Version    Source
-----------     ----        -------    ------
Application     ssh.exe     8.1.0.1    C:\Windows\System32\OpenSSH\ssh.exe
```

To configure Git to use the Windows version of OpenSSH, update the SSH command with git config, such as:

```bat
git config --global core.sshCommand C:/Windows/System32/OpenSSH/ssh.exe
```

### Start the SSH agent

To allow git to use your SSH key, an SSH agent needs to be running on your device.

#### Git for Windows users

From a git bash terminal, check if the SSH agent is running using the ```ps -a | grep ssh-agent``` command. If the ssh-agent is already running, it should appear in the output, such as:

```
$ ps -a | grep ssh-agent
     3334       1    3334      20284  ?         197108 10:16:11 /usr/bin/ssh-agent
```

To start the agent:

```bat
eval $(ssh-agent)
```

#### Windows OpenSSH users

From a PowerShell, configure the SSH agent to start each time the device is started, use the Set-Service command:

```bat
Set-Service ssh-agent -StartupType Automatic
```

Then To start the agent:

```bat
Start-Service ssh-agent
```

To check if the SSH Agent is running use the ```Get-Service ssh-agent``` command

```bat
$ Get-Service ssh-agent

Status   Name               DisplayName
------   ----               -----------
Running  ssh-agent          OpenSSH Authentication Agent
```

### Generate an SSH key pair

#### Generate the `ssh` key with the following:

```bat
 cd ~/.ssh && ssh-keygen -t rsa -b 2048
```

It will ask you to enter the name of the key for example `id_bitbucket_rsa`

When prompted to Enter passphrase, you can either provide a password or leave the password empty. If you input a password, you will be prompted for this password each time SSH is used, such as using Git commands (git push, git pull, and git fetch).

#### Add the ssh key to your agent

```bat
cd ~/.ssh && ssh-add id_bitbucket_rsa
```

You may face an error

```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions for 'id_bitbucket_rsa' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
```

The solution is by changing the permissions of the private key

- Right click and choose `Properties`
- Navigate to the `Security` tab and click `Advanced`.
- Change the owner to you, disable inheritance and delete all permissions. Then grant yourself "Full control" and save the permissions.


### Apply your ssh to your Bitbucket.org

To add an SSH key to your [user account](https://bitbucket.org/account/settings/ssh-keys/):

- At bitbucket.org, select your avatar (Your profile and settings) from the navigation bar at the top of the screen.

- Under Settings, select Personal settings.

- Under Security, select SSH keys.

- Select Add the public pair of the generated key.

- In the Add SSH key dialog, provide a Label to help you identify which key you are adding. 

::: info

Pro tip: to copy the content of file to the clipboard use the following as an example

```bat
cd ~/.ssh && cat id_bitbucket_rsa.pub | clip
```

:::
