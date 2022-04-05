/*              
.                ======================
?               === My Linux Cheatsheet === 
.                ======================         
*/

/*      Tipps

Installiere gnome-tweaks, die Browser Gnome Shell Integration und die  gnome-extensions-app

*/


/*      commands

? Manual pages
man <topic> öffnet eine Manual-Datei zum nachlesen über das command.

?  systemd
Starting, stopping, restarting a service (using httpd, the Apache web server, as an example) on a currently running system:
$ sudo systemctl start|stop|restart httpd.service
Enabling or disabling a system service from starting up at system boot:
$ sudo systemctl enable|disable httpd.service
In most cases, the .service can be omitted. 

? Alles löschen das den Suchbegriff beinhaltet
sudo find -type f -name '*suchbegriff*' -delete

? Aktueller Pfad
ctrl + l im filemanager

? GUI starten
startx

? Linux hit command
Alt+F2

*/


/*      InstallationList 

apt list --installed > allthethings.txt
Install software from a text file:
[root@host ~]# xargs -a allthethings.txt apt install

dpkg-query -f '${binary:Package}\n' -W > allthethings.txt
Install software from a text file:
[root@host ~]# apt-get install < allthethings.txt

Further Detail
After reinstalling your base Linux system, copy or upload a copy of the ‘allthethings.txt’ file to your system. Please ensure you have installed the same version of your OS on your new or remote system. Once the file has been copied, install the packages from the allthethings.txt file using one of the above noted commands as the root user. The package manager will install all of the packages listed in the ‘allthethings.txt’ file on your system.
--> https://www.liquidweb.com/kb/how-to-create-a-software-install-list/


How to delete OS from boot menu

The menu to which you refer is the firmware's built-in boot manager. Its entries are stored in NVRAM, and can be edited by any number of tools in various environments:

    Some EFIs provide a means to do this via their setup utility. Details vary from one system to another, though, and many don't permit you to add or delete boot manager entries.
    The EFI version 2 shell provides a command called bcfg that can do the job. You'd need to do bcfg boot dump -b to see the entries, then bcfg boot rm # to delete entry number # -- # must be the number associated with whatever entry you want to remove. For example, if the entry is Boot0002 Fedora, then # is 2.
    In Linux, efibootmgr can do the job: Type efibootmgr or efibootmgr -v to see the entries, then do efibootmgr -b # -B to delete entry #. (You must type these commands as root or using sudo.)
    In Windows, the EasyUEFI tool should be able to handle the job, although I've only toyed with it briefly, so I can't give detailed instructions.

Be aware that in any of these cases, you may have leftover files on your EFI System Partition (ESP). You can delete them through normal file-manipulation commands, although depending on your OS, you may need to explicitly mount the ESP. If they aren't referenced, the files won't do any real harm, unless they consume so much space that they prevent you from installing another OS or updating your boot manager. The files will normally be stored in subdirectories of the EFI directory on the ESP; most OSes create subdirectories named after themselves or the companies that create them, such as EFI/ubuntu for Ubuntu or EFI/Microsoft for Windows.

*/


/*      Dictionary
udev    user device
bash    GNU Bourne Again Shell
usr     user

todo    X oder X Window System      
Linux-GUI, lädt den Service Display Manager
A desktop environment consists of a session manager, which starts and maintains the components of the graphical session, and the window manager,
which controls the placement and movement of windows, window title-bars, and controls.
Although these can be mixed, generally a set of utilities, session manager, and window manager are used together as a unit, 
and together provide a seamless desktop environment. If the display manager is not started by default in the default runlevel,
you can start the graphical desktop different way, after logging on to a text-mode console, by running startx from the command line. 
Or, you can start the display manager (gdm, lightdm, kdm, xdm, etc.) manually from the command line. This differs from running startx as the
display managers will project a sign in screen. We discuss them next.


 */


//#region Kursmaterial

/*      Boot process & Linux Kernel

todo Bios
Starting an x86-based Linux system involves a number of steps. When the computer is powered on, the Basic Input/Output System (BIOS) initializes the hardware, 
including the screen and keyboard, and tests the main memory. This process is also called POST (Power On Self Test).
The BIOS software is stored on a ROM chip on the motherboard. After this, the remainder of the boot process is controlled by the operating system (OS).

todo Master Boot Record (MBR) and Boot Loader
Once the POST is completed, the system control passes from the BIOS to the boot loader. The boot loader is usually stored on one of the hard disks in the system,
either in the boot sector (for traditional BIOS/MBR systems) or the EFI partition (for more recent (Unified) Extensible Firmware Interface or EFI/UEFI systems). 
Up to this stage, the machine does not access any mass storage media. Thereafter, information on date, time, and the most important peripherals are loaded from the 
CMOS values (after a technology used for the battery-powered memory store which allows the system to keep track of the date and time even when it is powered off).

A number of boot loaders exist for Linux; the most common ones are GRUB (for GRand Unified Boot loader), ISOLINUX (for booting from removable media), 
and DAS U-Boot (for booting on embedded devices/appliances). Most Linux boot loaders can present a user interface for choosing alternative options for booting Linux, 
and even other operating systems that might be installed. When booting Linux, the boot loader is responsible for loading the kernel image and the initial RAM disk or 
filesystem (which contains some critical files and device drivers needed to start the system) into memory.

todo Boot Loader in Action
The boot loader has two distinct stages:
For systems using the BIOS/MBR method, the boot loader resides at the first sector of the hard disk, also known as the Master Boot Record (MBR). 
The size of the MBR is just 512 bytes. In this stage, the boot loader examines the partition table and finds a bootable partition. Once it finds a bootable partition, 
it then searches for the second stage boot loader, for example GRUB, and loads it into RAM (Random Access Memory). For systems using the EFI/UEFI method, 
UEFI firmware reads its Boot Manager data to determine which UEFI application is to be launched and from where (i.e. from which disk and partition the EFI partition
can be found). The firmware then launches the UEFI application, for example GRUB, as defined in the boot entry in the firmware's boot manager. 
This procedure is more complicated, but more versatile than the older MBR methods.

The second stage boot loader resides under /boot. A splash screen is displayed, which allows us to choose which operating system (OS) to boot. 
After choosing the OS, the boot loader loads the kernel of the selected operating system into RAM and passes control to it. Kernels are almost always compressed, 
so its first job is to uncompress itself. After this, it will check and analyze the system hardware and initialize any hardware device drivers built into the kernel.

todo Initial RAM Disk
The initramfs filesystem image contains programs and binary files that perform all actions needed to mount the proper root filesystem, 
like providing kernel functionality for the needed filesystem and device drivers for mass storage controllers with a facility called udev (for user device), 
which is responsible for figuring out which devices are present, locating the device drivers they need to operate properly, and loading them. 
After the root filesystem has been found, it is checked for errors and mounted.
The mount program instructs the operating system that a filesystem is ready for use, and associates it with a particular point in the overall hierarchy of 
the filesystem (the mount point). If this is successful, the initramfs is cleared from RAM and the init program on the root filesystem (/sbin/init) is executed.
init handles the mounting and pivoting over to the final real root filesystem. If special hardware drivers are needed before the mass storage can be accessed, 
they must be in the initramfs image.

todo Text-Mode Login

Near the end of the boot process, init starts a number of text-mode login prompts. These enable you to type your username, followed by your password, 
and to eventually get a command shell. However, if you are running a system with a graphical login interface, you will not see these at first.
Command Line Operations, the terminals which run the command shells can be accessed using the ALT key plus a function key. 
Most distributions start six text terminals and one graphics terminal starting with F1 or F2. Within a graphical environment, switching to a text console 
requires pressing CTRL-ALT + the appropriate function key (with F7 or F1 leading to the GUI).

Usually, the default command shell is bash (the GNU Bourne Again Shell), but there are a number of other advanced command shells available. 
The shell prints a text prompt, indicating it is ready to accept commands; after the user types the command and presses Enter, the command is executed, 
and another prompt is displayed after the command is done.

todo The Linux Kernel
The boot loader loads both the kernel and an initial RAM–based file system (initramfs) into memory, so it can be used directly by the kernel.
When the kernel is loaded in RAM, it immediately initializes and configures the computer’s memory and also configures all the hardware attached to the system. 
This includes all processors, I/O subsystems, storage devices, etc. The kernel also loads some necessary user space applications.

todo /sbin/init and Services
Once the kernel has set up all its hardware and mounted the root filesystem, the kernel runs /sbin/init. This then becomes the initial process, 
which then starts other processes to get the system running. Most other processes on the system trace their origin ultimately to init;
 exceptions include the so-called kernel processes. These are started by the kernel directly, and their job is to manage internal operating system details.

Besides starting the system, init is responsible for keeping the system running and for shutting it down cleanly. One of its responsibilities is to act when necessary
 as a manager for all non-kernel processes; it cleans up after them upon completion, and restarts user login services as needed when users log in and out, and does
the same for other background system services.

Traditionally, this process startup was done using conventions that date back to the 1980s and the System V variety of UNIX. This serial process had the system passing 
through a sequence of runlevels containing collections of scripts that start and stop services. Each runlevel supported a different mode of running the system. Within each 
runlevel, individual services could be set to run, or to be shut down if running.
However, all major distributions have moved away from this sequential runlevel method of system initialization, although they usually emulate many System V utilities 
for compatibility purposes. Next, we discuss the new methods, of which systemd has become dominant.

todo systemd Features
Systems with systemd start up faster than those with earlier init methods. This is largely because it replaces a serialized set of steps with aggressive parallelization
techniques, which permits multiple services to be initiated simultaneously. Complicated startup shell scripts are replaced with simpler configuration files, which
enumerate what has to be done before a service is started, how to execute service startup, and what conditions the service should indicate have been accomplished 
when startup is finished. One thing to note is that /sbin/init now just points to /lib/systemd/systemd; i.e. systemd takes over the init process.

One systemd command (systemctl) is used for most basic tasks. While we have not yet talked about working at the command line, here is a brief listing of its use:
Starting, stopping, restarting a service (using httpd, the Apache web server, as an example) on a currently running system:
$ sudo systemctl start|stop|restart httpd.service
Enabling or disabling a system service from starting up at system boot:
$ sudo systemctl enable|disable httpd.service
In most cases, the .service can be omitted. There are many technical differences with older methods that lie beyond the scope of our discussion.  

*/

/*      Linux Filesystem

todo Filesystem
Think of a refrigerator that has multiple shelves that can be used for storing various items. These shelves help you organize the grocery items by shape, size, type, etc. 
The same concept applies to a filesystem, which is the embodiment of a method of storing and organizing arbitrary collections of data in a human-usable form.
Different types of filesystems supported by Linux:
Conventional disk filesystems: ext3, ext4, XFS, Btrfs, JFS, NTFS, vfat, exfat, etc.
Flash storage filesystems: ubifs, jffs2, yaffs, etc.
Database filesystems
Special purpose filesystems: procfs, sysfs, tmpfs, squashfs, debugfs, fuse, etc.
This section will describe the standard filesystem layout shared by most Linux distributions.

todo Partitions and Filesystems
A partition is a physically contiguous section of a disk, or what appears to be so in some advanced setups.
A filesystem is a method of storing/finding files on a hard disk (usually in a partition). 
One can think of a partition as a container in which a filesystem resides, although in some circumstances,
 a filesystem can span more than one partition if one uses symbolic links, which we will discuss much later.
A comparison between filesystems in Windows and Linux is given in the accompanying table:
 	                                              Windows	            Linux
Partition	                                     Disk1	                /dev/sda1
Filesystem Type	                     NTFS/VFAT	EXT3/EXT4/XFS/BTRFS...
Mounting Parameters	            DriveLetter	        MountPoint
Base Folder (where OS stored)	C:                               \	

todo The Filesystem Hierarchy Standard
Linux systems store their important files according to a standard layout called the Filesystem Hierarchy Standard (FHS), 
which has long been maintained by the Linux Foundation. For more information, take a look at the following document: 
"Filesystem Hierarchy Standard" created by LSB Workgroup. Having a standard is designed to ensure that users, administrators, 
and developers can move between distributions without having to re-learn how the system is organized.

Linux uses the ‘/’ character to separate paths (unlike Windows, which uses ‘\’), and does not have drive letters. Multiple drives and/or partitions 
are mounted as directories in the single filesystem. Removable media such as USB drives and CDs and DVDs will show up as mounted at
/run/media/yourusername/disklabel for recent Linux systems, or under /media for older distributions. For example, if your username is student a 
USB pen drive labeled FEDORA might end up being found at /run/media/student/FEDORA, and a file README.txt on that disc would be at 
/run/media/student/FEDORA/README.txt.

todo More About the Filesystem Hierarchy Standard
All Linux filesystem names are case-sensitive, so /boot, /Boot, and /BOOT represent three different directories (or folders). Many distributions
distinguish between core utilities needed for proper system operation and other programs, and place the latter in directories under /usr (think user).

*/

/*      GUI

todo X Window System
Generally, in a Linux desktop system, the X Window System is loaded as one of the final steps in the boot process. It is often just called X.
A service called the Display Manager keeps track of the displays being provided and loads the X server (so-called, because it provides graphical 
services to applications, sometimes called X clients). The display manager also handles graphical logins and starts the appropriate desktop environment after
 a user logs in. X is rather old software; it dates back to the mid 1980s and, as such, has certain deficiencies on modern systems (for example, with security), 
 as it has been stretched rather far from its original purposes. A newer system, known as Wayland, is gradually superseding it and is the default display system for 
 Fedora, RHEL 8, and other recent distributions.  For the most part, it looks just like X to the user, although under the hood it is quite different.

todo    GUI Startup
When you install a desktop environment, the X display manager starts at the end of the boot process. It is responsible for starting the graphics system, 
logging in the user, and starting the user’s desktop environment. You can often select from a choice of desktop environments when logging in to the system.
The default display manager for GNOME is called gdm. Other popular display managers include lightdm (used on Ubuntu before version 18.04 LTS) and kdm (associated with KDE).

todo    GNOME Desktop Environment
GNOME is a popular desktop environment with an easy-to-use graphical user interface. It is bundled as the default desktop environment for most 
Linux distributions, including Red Hat Enterprise Linux (RHEL), Fedora, CentOS, SUSE Linux Enterprise, Ubuntu and Debian. GNOME has menu-based 
navigation and is sometimes an easy transition to accomplish for Windows users. However, as you will see, the look and feel can be quite different across distributions,
 even if they are all using GNOME. Another common desktop environment very important in the history of Linux and also widely used is KDE, which has often been 
 used in conjunction with SUSE and openSUSE. Other alternatives for a desktop environment include Unity (present on older Ubuntu, but still based on GNOME), 
 XFCE and LXDE. As previously mentioned, most desktop environments follow a similar structure to GNOME, and we will restrict ourselves mostly to it to keep things 
 less complex.

*/

//#endregion
