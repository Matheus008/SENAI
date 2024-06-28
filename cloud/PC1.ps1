$srPC1 = @{
    Name           = “subredeautPC1”
    VirtualNetwork = $redevirtual
    AddressPrefix  = “10.1.2.0/24"
}
$subredePC1 = Add-AzVirtualNetworkSubnetConfig @srPC1
    
    
$redevirtual | Set-AzVirtualNetwork


$cred = Get-Credential

$vnet = Get-AzVirtualNetwork -Name 'redevirtualaut' -ResourceGroupName 'Automacaogroup'

$prPC1 = @{
    Name              = “placaderedeMV1”
    ResourceGroupName = “Automacaogroup”
    Location          = “brazilsouth”
    Subnet            = $vnet.Subnets[0]
}
    
$placaderedePC1 = New-AzNetworkInterface @prPC1

$tamanhoMV1 = @{
    VMName = “Metalica”
    VMSize = “Standard_B1s”
}

$soMV1 = @{
    ComputerName = “Metalica”
    Credential   = $cred
}


$imagemMV1 = @{
    PublisherName = “Canonical”
    Offer         = “UbuntuServer”
    Skus          = “18.04-LTS”
    Version       = “latest”
}


$confMV1 = New-AzVMConfig @tamanhoMV1 | Set-AzVMOperatingSystem @soMV1 -Linux | 
Set-AzVMSourceImage @imagemMV1 | Add-AzVMNetworkInterface –Id $placaderedePC1.Id


$mvMV1 = @{
    ResourceGroupName = “Automacaogroup”
    Location          = “brazilsouth”
    VM                = $confMV1
}
New-AzVM @mvMV1

$cred2 = Get-Credential

$vnet = Get-AzVirtualNetwork -Name 'redevirtualaut' -ResourceGroupName 'Automacaogroup'

$prMV1 = @{
    Name              = “placaderedeMV2”
    ResourceGroupName = “Automacaogroup”
    Location          = “brazilsouth”
    Subnet            = $vnet.Subnets[0]
}
    
$placaderedeMV2 = New-AzNetworkInterface @prMV1

$tamanhoMV2 = @{
    VMName = "ACDC"
    VMSize = “Standard_B2s”
}


$soMV2 = @{
    ComputerName = “ACDC”
    Credential   = $cred2
}


$imagemMV2 = @{
    PublisherName = “MicrosoftWindowsServer”
    Offer         = “WindowsServer”
    Skus          = “2019-Datacenter”
    Version       = “latest”
}


$confMV2 = New-AzVMConfig @tamanhoMV2 | Set-AzVMOperatingSystem @soMV2 -Windows | 
Set-AzVMSourceImage @imagemMV2 | Add-AzVMNetworkInterface –Id $placaderedeMV2.Id


$mvMV2 = @{
    ResourceGroupName = “Automacaogroup”
    Location          = “brazilsouth”
    VM                = $confMV2
}
New-AzVM @mvMV2
